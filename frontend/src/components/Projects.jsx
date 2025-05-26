import '../styles/Projects.css';
import { motion } from 'framer-motion';
import mirrulations from '../assets/mirrulations.jpeg';
import calcium from '../assets/caco_img.svg';
import portfolio from '../assets/portfolio.jpeg';
import recipe from '../assets/recipe.jpeg';
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
    tech: ['React.js', 'Vite.js', 'Bootstrap', 'Docker', 'Amazon Web Services (AWS)', 'Figma', 'Agile Methodologies', 'Trello', 'GitHub'],
    deployed: 'https://mirrulations.org/auth'
  },
  {
    id: 'calcium',
    title: 'Calcium+Company',
    description: `Developed and implemented the company website using Agile Scrum methodologies. Regularly shared progress and blockers, and engaged in technical discussions through one-on-ones and team meetings. Proposed an artificial intelligence strategy across multiple channels within the company.`,
    image: calcium,
    date: date_one,
    tech: ['Node.js', 'HTML', 'SASS', 'JavaScript', 'Figma', 'Agile Methodologies', 'Scrum', 'Artificial Intelligence (AI)'],
    deployed: 'https://calciumco.com/'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: `Created and deployed a responsive personal site to showcase projects and hobbies, focused on clean UI/UX design.`,
    image: portfolio,
    date: date_two,
    tech: ['React.js', 'Vite.js', 'Vercel', 'Express.js', 'Node.js', 'CSS', 'GitHub'],
    deployed: 'https://clouduki.github.io/Brandons-Portfolio/index.html'
  },
  {
    id: "recipe",
    title: "Recipe App",
    description: "Designed and developed a responsive web application for recipe search and exploration using the Spoonacular API.",
    image: recipe,
    date: date_two,
    tech: ['JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GitHub'],
    github: 'https://github.com/CloudUki/Recipe-App'
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
    description: "Designed and developed a responsive web application for recipe search and exploration using the Spoonacular API.",
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
