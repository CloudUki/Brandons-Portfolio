import '../styles/Experience.css';
import { motion } from 'framer-motion'; 

const experience = [
{
    id: 'ca+co',
    date: "June 2024 - August 2024",
    title: 'Technology Intern · Calcium+Company',
    location: "Philadelphia, PA",
    desc: [
        "Designed, built, and deployed the company website end-to-end, significantly improving engagement and interaction.",
        "Engineered the front-end interface with a tech stack including NodeJS, JavaScript, HTML, SASS, and Figma.",
        "Actively contributed to Agile development through Scrum methodology, in daily standups, sprint planning and retrospectives.",
        "Regularly shared progress and blockers while contributing to technical discussions, one-on-ones and team meetings.",
        "Developed and presented an internal plan to incorporate artificial intelligence (AI) across multiple channels within the company."
    ],
    link: 'https://calciumco.com/'
  },
  {
    id: 'helpdesk',
    date: "September 2023 - May 2025",
    title: 'IT Helpdesk Technician · Moravian University',
    location: "Bethlehem, PA",
    desc: [
        "Managed support for Apple devices, public Mac/PC labs, and printers in a high-demand university campus setting.",
        "Delivered prompt and effective technical support for in-classroom emergencies, ensuring minimal disruption.",
        " Logged all user issues and service requests in ServiceNow with clarity and precision during troubleshooting."
    ],
    link: 'https://www.moravian.edu/'
  },
  {
    id: 'teacher',
    date: "October 2024 - May 2025",
    title: 'Teacher Assistant · Moravian University',
    location: "Bethlehem, PA",
    desc: [
        "Supported student projects in and outside of class to enhance understanding and project outcomes.",
        "Reviewed student code and provided actionable feedback to enhance code quality and understanding.",
        "Clarified concepts to support student understanding and confident application."
    ],
    link: 'https://www.moravian.edu/'
  }
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <h2 className="experience-header">Experience</h2>
            {experience.map((exp) => (
                <div key={exp.id} className="experience-entry">
                <div className="experience-date">{exp.date}</div>
                <div className="experience-content">
                    <a href={exp.link} className="experience-role" target="_blank" rel="noopener noreferrer">
                    {exp.title} ↗
                    </a>
                    <div className="experience-subtitle">{exp.location}</div>
                    <p>
                        {exp.desc.join(', ')}
                    </p>
                </div>
                </div>
            ))}
        </section>
    );
}