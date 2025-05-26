import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <motion.section 
        id="contact"
        className='contact_section'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            >
                <h2>Contact Me</h2>
                <div className="contact-links">                            
                    <a href="mailto:brandon.yang1210@gmail.com" aria-label="Email"><FaEnvelope />{' '}</a>
                    <a href="https://github.com/CloudUki" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub />{' '}</a>
                    <a href="https://www.linkedin.com/in/brandonyyang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin />{' '}</a>
                </div>
            </motion.div>
        </motion.section>
    );
}