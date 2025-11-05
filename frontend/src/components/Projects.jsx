import { motion } from 'framer-motion';
import { useState } from 'react';
import mirrulations from '../assets/mirrulations.jpeg';
import calcium from '../assets/caco_img.svg';
import portfolio from '../assets/portfolio.jpeg';
import photo from '../assets/photography.jpeg';
import checkers from '../assets/checkers_img.svg';
import moravian from '../assets/mu_ball_img.jpg';
import recipe from '../assets/Recipe_App.jpg';
import date_one from '../assets/two_four.svg';
import date_two from '../assets/two-five.svg';

const projects = [
  {
    id: 'mirrulations',
    title: 'Mirrulations',
    description: `Led frontend development of a full-stack search platform for Regulations.gov improving usability and accessibility for 1K+
                  users. Integrated Amazon Cognito to provide secure authentication, safeguarding our REST API endpoints protecting user data.
                  Applied Agile practices by coordinating development tasks in Trello, streamlining workflow and reducing delivery time.
                  Leveraged Git and GitHub for version control and documentation, ensuring code quality and project transparency.`,
    image: mirrulations,
    date: date_two,
    tech: ['ReactJS', 'ViteJS', 'Bootstrap', 'Docker', 'AWS', 'Figma', 'GitHub', 'Scrum', 'Agile'],
    deployed: 'https://mirrulations.org/auth',
    category: 'Full-Stack - FrontEnd',
    featured: true
  },
  {
    id: 'calcium',
    title: 'Calcium+Company',
    description: `Developed and launched a responsive website using React and TypeScript, improving UI performance and user engagement.
                  Collaborated with designers and product managers to translate Figma wireframes into interactive, cross-browser UI components.
                  Implemented WCAG/ADA compliant components to ensure accessibility across all major browsers and devices.
                  Led an AI-driven automation initiative, streamlining internal workflows and improving operational efficiency.`,
    image: calcium,
    date: date_one,
    tech: ['NodeJS', 'HTML', 'SCSS', 'JavaScript', 'TypeScript','Figma', 'Scrum'],
    deployed: 'https://calciumco.com/',
    category: 'Frontend',
    featured: true
  },
  {
    id: 'recipe',
    title: 'Recipe App',
    description: `Developed a responsive mobile app used by users to quickly find recipes while shopping or cooking by integrating the Spoonacular API, responsive design, and real-time search features.
                  Leverage GitHub and Expo Go to automate deployment processes and maintain consistent version control through CI/CD
                  Designed and prototyped user interfaces in Figma, enhancing usability and design consistency through iterative testing.`,
    image: recipe,
    date: date_two,
    tech: ['React Native', 'React Native Paper', 'Expo Go', 'Figma', 'GitHub', 'Spoonacular API',  'CI/CD'],
    category: 'Full-Stack',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: `Developed a responsive, user-friendly website that increased project visibility by 40%, showcasing technical skills to potential employers.
                  Leveraged GitHub and Vercel to automate deployment processes and maintain consistent version control through CI/CD
                  Developed Jest-based unit tests to verify component behavior, supporting stable releases and clean code practices.`,
    image: portfolio,
    date: date_two,
    tech: ['React.js', 'ViteJS', 'Vercel', 'NextJS', 'Bootstrap', 'GitHub', 'Jest', 'CI/CD'],
    deployed: 'https://brandons-portfolio.vercel.app/',
    category: 'Frontend'
  },
  {
    id: "photography",
    title: "Photography Portfolio",
    description: `Designed and developed a full-stack photo gallery application, managing state efficiently with Redux and React hooks.
                  Integrated Supabase backend services for real-time data handling and storage.
                  Utilized accessible and responsive UI components with Chakra-UI to enhance usability across devices.
                  Implemented an interactive chatbot to guide visitors through my portfolio and provide instant answers to common questions.`,
    image: photo,
    date: date_two,
    tech: ['React', 'ViteJS', 'NextJS', 'Supabase', 'Chakra-UI', 'GitHub', 'Vercel', 'Redux', 'CI/CD'],
    deployed: 'https://brandons-photography.vercel.app/',
    category: 'Frontend'
  },
  {
    id: "checkers",
    title: "Checkers",
    description: "Collaborated as part of a team to design and deploy a dynamic website integrating AWS services with the front end.",
    image: checkers,
    date: date_one,
    tech: ['HTML', 'CSS', 'Python', 'AWS', 'GitHub'],
    github: 'https://github.com/CloudUki/AWS-Checkers',
    category: 'Full-Stack'
  },
  {
    id: "moravian",
    title: "Moravian Women's Basketball Roster",
    description: "Designed and developed a responsive web application for stat tracking and roster management for the Moravian University",
    image: moravian,
    date: date_one,
    tech: ['HTML', 'CSS', 'MySQL', 'Java', 'SpringBoot', 'GitHub'],
    github: 'https://github.com/CloudUki/CS_Moravian_Bball_project',
    category: 'Full-Stack'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header Section */}
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-4 fw-bold text-dark mb-3">
                My Projects
              </h2>
              <div className="mx-auto bg-primary rounded-pill mb-3" style={{ width: '100px', height: '4px' }}></div>
              <p className="lead text-muted">A showcase of my technical skills and solutions</p>
            </motion.div>

            {/* Projects Grid */}
            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`col-md-6 ${project.featured ? 'col-lg-6' : 'col-lg-4'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="card h-100 border-0 shadow-sm">
                    {/* Project Image */}
                    <div className="position-relative" style={{ height: '200px' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover card-img-top"
                      />
                      
                      {/* Date/Category */}
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <img 
                          src={project.date} 
                          alt="Project Date" 
                          className="rounded-pill bg-white p-1 shadow-sm"
                          style={{ height: '30px' }}
                        />
                      </div>
                      
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className={`badge ${project.category === 'Full-Stack' ? 'bg-success' : 'bg-info'} px-3 py-2 rounded-pill`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title h5 fw-bold text-dark mb-3">
                        {project.title}
                      </h3>
                      <p className="card-text text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <div className="d-flex flex-wrap gap-2">
                          {project.tech.slice(0, 5).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="badge bg-light text-dark border px-2 py-1 rounded-pill small"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="badge bg-secondary px-2 py-1 rounded-pill small">
                              +{project.tech.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        {project.deployed && (
                          <button
                            className="btn btn-primary flex-fill rounded-pill"
                            onClick={() => window.open(project.deployed, '_blank')}
                          >
                            Live Demo
                          </button>
                        )}
                        {project.github && (
                          <button
                            className="btn btn-outline-dark flex-fill rounded-pill"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            GitHub
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}