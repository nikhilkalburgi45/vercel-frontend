import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delta, setDelta] = useState(150);
  const roles = ['Full Stack Developer', 'Computer Engineering Student', 'Backend Specialist'];

  // Role typing effect
  useEffect(() => {
    const tick = () => {
      const i = currentIndex % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setRole(fullText.substring(0, role.length - 1));
      } else {
        setRole(fullText.substring(0, role.length + 1));
      }

      if (!isDeleting && role === fullText) {
        setDelta(1000);
        setIsDeleting(true);
      } else if (isDeleting && role === '') {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(timer);
  }, [role, isDeleting, currentIndex, delta, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8 text-center">
            <motion.div variants={itemVariants} className="inline-block bg-[#121212] px-3 py-1 rounded-md text-[#0f0] text-sm border-l-2 border-[#0f0]">
              <span className="typing-container">
                <span className="typing-text">$ whoami</span>
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold font-jetbrains text-white">
              Hi, I'm <span className="text-[#0f0]">Nikhil Kalburgi</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="h-10 overflow-hidden">
              <span className="text-xl md:text-2xl text-[#1e90ff]">{role}<span className="animate-pulse">_</span></span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Specialized in scalable backend systems and intuitive frontend interfaces.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center space-x-6">
              <a href="https://github.com/nikhilkalburgi45" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-[#0f0] transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nikhil-kalburgi-79b157234" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-[#1e90ff] transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:nikhil@kalburgi.dev" className="text-3xl text-gray-300 hover:text-[#ff79c6] transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-[#1e90ff] bg-opacity-20 border border-[#1e90ff] text-[#1e90ff] rounded-md hover:bg-[#1e90ff] hover:text-[#121212] transition duration-300 font-medium"
              >
                View Projects
              </a>
              <a 
                href="https://drive.google.com/file/d/1aKbHvuVEPJ8TMoBfg2ORxfkTaFvd_RC7/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#121212] border border-[#0f0] text-[#0f0] rounded-md hover:bg-[#0f0] hover:text-[#121212] transition duration-300 font-medium"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
