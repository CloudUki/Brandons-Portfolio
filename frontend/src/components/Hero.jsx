import pfpic from '../assets/pf-pic.svg';
import resume from '../assets/Brandon_Yang_Resume.pdf';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import { useState } from 'react';


const openResume = () => {
    track('Resume Viewed');
    window.open(resume, '_blank');
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const profileVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15, 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light position-relative overflow-hidden">
      <motion.section
        className="container text-center py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.p 
              className="text-primary fs-4 fw-medium mb-4"
              variants={itemVariants}
            >
              Hi, my name is
            </motion.p>
            
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 mb-4">
              <motion.div
                className="position-relative"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.img 
                  src={pfpic} 
                  alt="Brandon Yang" 
                  className="rounded-circle border border-4 border-primary-subtle shadow-lg pf-pic"
                  style={{ 
                    width: '180px', 
                    height: '180px',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 0 20px rgba(13, 110, 253, 0.3))'
                  }}
                  variants={profileVariants}
                  initial="initial"
                />
                
                <motion.div
                  className="position-absolute rounded-circle "
                  style={{
                    top: '-15px',
                    left: '-15px',
                    right: '-15px',
                    bottom: '-15px',
                    background: 'linear-gradient(45deg, #0d6efd, #20c997, #0d6efd)',
                    filter: 'blur(20px)',
                    zIndex: -1,
                    pointerEvents: 'none'
                  }}
                  animate={{
                    opacity: isHovered ? 0.8 : 0,
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.h1 
                className="display-3 fw-bold mb-0"
                style={{
                  background: 'linear-gradient(135deg, #808080, #000080)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                variants={itemVariants}
              >
                Brandon Yang
              </motion.h1>
            </div>

            <motion.h2 
              className="h3 text-secondary mb-4"
              variants={itemVariants}
            >
              Junior Web Developer
            </motion.h2>

            <motion.p 
              className="lead text-muted mb-5 mx-auto"
              style={{ maxWidth: '600px' }}
              variants={itemVariants}
            >
              I graduated from Moravian University with a Bachelor of Science
              in Computer Science degree in May 2025.<br></br>
              I am currently a Junior Web Developer at 
              Zen Agency, where I build and maintain custom high quality websites. <br></br>
              I am interested in front-end software engineering,<br></br> 
              using my skills and knowledge to impact 
              the world positively.
            </motion.p>

            <motion.div 
              className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center"
              variants={itemVariants}
            >
              <motion.button 
                onClick={openResume} 
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-lg d-flex align-items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #0d6efd, #0056b3)',
                  border: 'none',
                  minWidth: '200px'
                }}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                View My Resume!
              </motion.button>
              
              <motion.a 
                href="#experience" 
                className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2 text-decoration-none"
                style={{ minWidth: '200px' }}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Work Experience
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="btn btn-outline-success btn-lg px-5 py-3 rounded-pill d-flex align-items-center gap-2 text-decoration-none"
                style={{ minWidth: '200px' }}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                My Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}