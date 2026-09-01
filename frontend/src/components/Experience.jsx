import { motion } from 'framer-motion'; 
import { useState } from 'react';

const experience = [
    {
    id: 'zen',
    date: "August 2026 - Present",
    title: 'Junior Web Developer · Zen Agency',
    location: "Remote",
    desc: [
        "Develop, customize, and maintain responsive websites and web applications using modern web technologies and best practices.",
        "Built and optimized WooCommerce e-commerce solutions, including custom functionality, performance enhancements, and issue resolution.",
        "Collaborated with clients, stakeholders, and leadership to gather requirements, deliver projects on schedule, and ensure high quality outcomes.",
        "Created custom integrations and web solutions using AI-powered development workflows to improve efficiency and code quality."
    ],
    link: 'https://zen.agency/',
    color: 'secondary'
  },
    {
    id: 'awi',
    date: "February 2026 - August 2026",
    title: 'Service Experience Technician · Armstrong World Industries',
    location: "Lancaster, PA",
    desc: [
        "Delivered Tier 1 technical support via phone, email, chat, and ticketing system within ServiceNow.",
        "Troubleshooted and resolve hardware, software, and account-related issues in a high-volume support environment.",
        "Managed user provisioning, password resets, and access control in Active Directory while installing and configuring desktop software, drivers, and antivirus to maintain secure, fully functional systems.",
        "Documented and track incidents to meet SLA targets, escalating complex issues to Tier 2/3 teams and maintaining high customer satisfaction through clear, timely communication.",
        "Engineered an AI driven solution during a company wide Hackathon to automate security compliance email workflows, reducing manual review and improving accuracy and timeliness of employee compliance."
    ],
    link: 'https://www.armstrong.com/',
    color: 'primary'
  },
{
    id: 'ca+co',
    date: "June 2024 - August 2024",
    title: 'Technology Intern · Calcium+Company',
    location: "Philadelphia, PA",
    desc: [
        "Developed and launched a responsive website using Bootstrap and SCSS, improving UI performance and user engagement.",
        "Worked alongside other developers to deliver compliant, client-focused software solutions within the pharmaceutical space.Collaborated closely with designers and product managers to translate Figma wireframes into interactive, cross-browser UI components.",
        "Collaborated closely with designers and product managers to translate Figma wireframes into interactive, cross browser UI components.",
        "Contributed to code reviews, debugging, and performance optimization, supporting high-quality and maintainable codebases.",
        "Led an AI-driven automation initiative, streamlining internal workflows and improving operational efficiency.",
    ],
    link: 'https://calciumco.com/',
    color: 'secondary'
  },
  {
    id: 'freelance',
    date: "February 2026 - July 2026",
    title: 'Freelance Developer',
    location: "Lancaster, PA",
    desc: [
        "Built a client-facing web application using React, TypeScript, and Tailwind CSS, delivering a responsive and maintainable UI.",
        "Implemented CI/CD deployment with GitHub and Vercel (Next.js) to automate builds, version control, and releases.",
        "Created and iterated on Figma wireframes, improving usability and design consistency through testing and feedback."
    ],
    color: 'warning',
  },
  {
    id: 'costco',
    date: "October 2025 - February 2026",
    title: 'Major Sales Associate · Costco Wholesale',
    location: "Lancaster, PA",
    desc: [
        "Delivered strong professional customer service experiences by efficiently resolving member needs and issues while providing.",
        "Contributed to daily operations by collaborating across teams and training new staff for performance readiness.",
        "Maintained accuracy and efficiency while adapting to a fast-paced, high-volume, deadline driven environment."
    ],
    link: 'https://www.costco.com/',
    color: 'danger',
  },
  {
    id: 'helpdesk',
    date: "September 2023 - May 2025",
    title: 'IT Helpdesk Technician · Moravian University',
    location: "Bethlehem, PA",
    desc: [
        "Resolved Apple, Windows, and printer issues for 100+ daily users, maintaining system availability on a high-traffic campus.",
        "Reduced classroom downtime by rapidly troubleshooting time-sensitive hardware and software incidents.",
        "Documented 100+ incidents per semester in TeamDynamix, improving issue tracking and resolution consistency."
    ],
    link: 'https://www.moravian.edu/',
    color: 'success'
  },
];

export default function Experience() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        initial: { scale: 1, y: 0 },
        hover: { 
            scale: 1.02, 
            y: -5,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
            }
        }
    };

    return (
        <section id="experience" className="py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Header */}
                        <motion.div
                            className="text-center mb-5"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="display-4 fw-bold text-dark mb-2">
                                Experience
                            </h2>
                            <div className="mx-auto bg-primary rounded-pill" style={{ width: '100px', height: '4px' }}></div>
                            <p className="lead text-muted mt-3">My professional journey and growth</p>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {experience.map((exp, index) => (
                                <motion.div 
                                    key={exp.id} 
                                    className="row mb-4"
                                    variants={cardVariants}
                                >
                                    <div className="col-12">
                                        <motion.a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                            display: "block"
                                        }}
                                        >
                                        <motion.div
                                            className={`card border-0 shadow-sm h-100 position-relative overflow-hidden`}
                                            variants={cardHoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            onHoverStart={() => setHoveredCard(exp.id)}
                                            onHoverEnd={() => setHoveredCard(null)}
                                            style={{ 
                                            cursor: 'pointer',
                                            background: hoveredCard === exp.id 
                                                ? 'linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(255, 255, 255, 1))' 
                                                : '#fff'
                                            }}
                                        >
                                            <motion.div
                                            className="position-absolute top-0 start-0 w-100"
                                            style={{ height: '4px', zIndex: 1 }}
                                            animate={{
                                                background: hoveredCard === exp.id 
                                                    ? `linear-gradient(90deg, var(--bs-${exp.color}), var(--bs-${exp.color === 'primary' ? 'success' : exp.color === 'success' ? 'info' : 'primary'}))` 
                                                    : `var(--bs-${exp.color})`
                                            }}
                                            transition={{ duration: 0.3 }}
                                            />

                                            {/* Card */}
                                            <div className="card-body p-4">
                                            <div className="row align-items-center">
                                                {/* Date */}
                                                <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                    <span className={`badge bg-${exp.color} bg-opacity-10 text-${exp.color} px-3 py-2 rounded-pill small fw-medium`}>
                                                    {exp.date}
                                                    </span>
                                                </div>
                                                </div>

                                                {/* Content */}
                                                <div className="col-md-9 col-lg-10">
                                                {/* Title, Location */}
                                                <div className="mb-3">
                                                    <h4 className={`fw-bold text-${exp.color} d-inline-flex align-items-center gap-2 mb-1`}>
                                                    {exp.title}
                                                    <motion.span
                                                        animate={{ 
                                                        x: hoveredCard === exp.id ? 5 : 0,
                                                        rotate: hoveredCard === exp.id ? 45 : 0
                                                        }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        ↗
                                                    </motion.span>
                                                    </h4>
                                                    <div className="text-muted fw-medium">
                                                    {exp.location}
                                                    </div>
                                                </div>

                                                    {/* Description */}
                                                    <ul className="list-unstyled mb-0">
                                                        {exp.desc.map((point, pointIndex) => (
                                                        <motion.li 
                                                            key={pointIndex}
                                                            className="d-flex align-items-start mb-2 text-muted"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ 
                                                            delay: index * 0.1 + pointIndex * 0.05,
                                                            duration: 0.4 
                                                            }}
                                                        >
                                                            <span className={`text-${exp.color} me-2 flex-shrink-0`} style={{ marginTop: '2px' }}>
                                                            ▸
                                                            </span>
                                                            <span className="lh-base">
                                                            {point.trim()}
                                                            </span>
                                                        </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>

                                            {/* BG overlay */}
                                            <motion.div
                                                className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                                                style={{
                                                    background: `linear-gradient(135deg, rgba(var(--bs-${exp.color}-rgb), 0.03), transparent 50%)`,
                                                    zIndex: 0
                                                }}
                                                animate={{
                                                    opacity: hoveredCard === exp.id ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                />
                                            </motion.div>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}