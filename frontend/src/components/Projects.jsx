import '../styles/Projects.css';
import { motion } from 'framer-motion';
import mirrulations from '../assets/mirrulations.jpeg';
import calcium from '../assets/caco_img.svg';
import portfolio from '../assets/portfolio.jpeg';
import photo from '../assets/photography.jpeg';
import checkers from '../assets/checkers_img.svg';
import moravian from '../assets/mu_ball_img.jpg';
import date_one from '../assets/two_four.svg';
import date_two from '../assets/two-five.svg';


const projects = [
  {
    id: 'mirrulations',
    title: 'Mirrulations',
    description: `Engineered a full-stack web app to improve search on Regulations.gov for a capstone project. Designed and implemented the web interface to improve user experience and functionality. Coordinated development tasks with Trello and GitHub, applying Agile methodologies for efficient team workflow.`,
    image: mirrulations,
    date: date_two,
    tech: ['ReactJS', 'ViteJS', 'Bootstrap', 'Docker', 'Amazon Web Services (AWS)', 'Figma', 'Agile Methodologies', 'Trello', 'GitHub'],
    deployed: 'https://mirrulations.org/auth'
  },
  {
    id: 'calcium',
    title: 'Calcium+Company',
    description: `● Designed, built, and deployed the company website end-to-end, significantly improving engagement and interaction.
                  ● Engineered the front-end interface with a tech stack including NodeJS, JavaScript, HTML, SASS, and Figma.
                  ● Actively contributed to Agile development through Scrum methodology, in daily standups, sprint planning and retrospectives.
                  ● Regularly shared progress and blockers while contributing to technical discussions, one-on-ones and team meetings.
                  ● Developed and presented an internal plan to incorporate artificial intelligence (AI) across multiple channels within the company.`,
    image: calcium,
    date: date_one,
    tech: ['NodeJS', 'HTML', 'SASS', 'JavaScript', 'Figma', 'Agile Methodologies', 'Scrum', 'Artificial Intelligence (AI)'],
    deployed: 'https://calciumco.com/'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: `Designed and deployed a responsive website showcasing projects and hobbies focusing on intuitive design. Engineered a scalable, smooth user interface utilizing React, CSS, Vercel, NextJS, ViteJS, and GitHub. Leveraged Jest for unit testing to ensure component stability and maintain code quality.`,
    image: portfolio,
    date: date_two,
    tech: ['React.js', 'ViteJS', 'Vercel', 'NextJS', 'CSS', 'GitHub'],
    deployed: 'https://brandons-portfolio.vercel.app/',
  },
  {
    id: "photography",
    title: "Photography Portfolio",
    description: "Developed a web application highlighting my photography and facilitating professional communication. Implemented a fast, seamless user interface by developing with React, Vite, and NextJS. Leveraged Supabase storage for hosting and serving uploaded images in a photography portfolio.",
    image: photo,
    date: date_two,
    tech: ['React', 'ViteJS', 'NextJS', 'Supabase', 'Chakra-UI', 'GitHub'],
    deployed: 'https://brandons-photography.vercel.app/'
  },
  {
    id: "checkers",
    title: "Checkers",
    description: "Collaborated as part of a team to design and deploy a dynamic website integrating AWS services with the front end.",
    image: checkers,
    date: date_one,
    tech: ['HTML', 'CSS', 'Python', 'Amazon Web Services (AWS)', 'GitHub'],
    github: 'https://github.com/CloudUki/AWS-Checkers'
  },
  {
    id: "moravian",
    title: "Moravian Women's Basketball Roster",
    description: "Designed and developed a responsive web application for stat tracking and roster management for the Moravian University",
    image: moravian,
    date: date_one,
    tech: ['HTML', 'CSS', 'MySQL', 'Java', 'SpringBoot', 'Agile Methodologies', 'GitHub'],
    github: 'https://github.com/CloudUki/CS_Moravian_Bball_project'
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="projects-heading">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <img src={project.date} alt="Project Date" className="project-date" />
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span className="tech-box" key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.deployed && (
                <button
                  onClick={() => window.open(project.deployed, '_blank')}
                  id="view_deploy"
                >
                  View Deployed
                </button>
              )}
              {project.github && (
                <button
                  onClick={() => window.open(project.github, '_blank')}
                  id="view_github"
                >
                  GitHub
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
