import '../styles/Experience.css';
import { motion } from 'framer-motion'; 

const experience = [
{
    id: 'ca+co',
    date: "June 2024 - August 2024",
    title: 'Technology Intern · Calcium+Company',
    location: "Philadelphia, PA",
    desc: [
        "Developed and implemented the company website using Agile Scrum methodologies and various web technologies.",
    ],
    link: 'https://calciumco.com/'
  },
  {
    id: 'helpdesk',
    date: "September 2023 - May 2025",
    title: 'IT Helpdesk Technician · Moravian University',
    location: "Bethlehem, PA",
    desc: [
        "Provided technical support to students and faculty, resolving hardware and software issues.",
    ],
    link: 'https://www.moravian.edu/'
  },
  {
    id: 'teacher',
    date: "October 2024 - May 2025",
    title: 'Teacher Assistant · Moravian University',
    location: "Bethlehem, PA",
    desc: [
        "Assisted in teaching a undergraduate course, providing support to students inside and outside the classroom to enhance understanding and project outcomes.",
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