import '../styles/Hero.css';
import pfpic from '../assets/pf-pic.svg';
import resume from '../assets/Brandon_Yang_Resume.pdf';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';


const openResume = () => {
    track('Resume Viewed');
    window.open(resume, '_blank');
};

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="intro-text">Hi, my name is</p>
      <div className="hero-wrapper">
        <img src={pfpic} alt="Brandon Yang" className="pf-img" />
        <h1 className="hero-title">Brandon Yang</h1>
      </div>
      <h2 className="hero-subtitle">A Rising Software Engineer</h2>
      <p className="hero-desc">
        I graduated from Moravian University in May 2025, 
        studying for my Bachelors of Science in Computer Science. 
        I am interested in front-end software engineering, 
        using my skills and knowledge to impact 
        the world positively.
      </p>
      <button onClick={openResume} className="view-button">View My Resume!</button>
      <a href="#experience" className="hero-button">View My Work Experience!</a>
      <a href="#projects" className="hero-button">Check Out My Projects!</a>
    </motion.section>
  );
}
