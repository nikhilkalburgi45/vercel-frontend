import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useRef, useEffect } from 'react';

const AboutSection = () => {
  const { ref, controls } = useScrollReveal();
  const codeScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const codeDiv = codeScrollRef.current;
    if (!codeDiv) return;
    let animationFrame: number;
    let direction = 1;

    const scrollSpeed = 1; // pixels per frame
    const scroll = () => {
      if (!codeDiv) return;
      if (direction === 1) {
        codeDiv.scrollLeft += scrollSpeed;
        if (codeDiv.scrollLeft + codeDiv.clientWidth >= codeDiv.scrollWidth) {
          direction = -1;
        }
      } else {
        codeDiv.scrollLeft -= scrollSpeed;
        if (codeDiv.scrollLeft <= 0) {
          direction = 1;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <motion.section 
      id="about" 
      className="py-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-3xl font-bold font-jetbrains inline-block relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#0f0] after:mt-1">
            <span className="text-[#0f0]">&lt;</span> About Me <span className="text-[#0f0]">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.1 }
              }
            }}
          >
            <div className="border-b border-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">aboutMe.js</div>
            </div>
            <div ref={codeScrollRef} className="p-6 font-mono overflow-x-auto whitespace-nowrap rounded-md scrollbar-thin">
              <pre className="text-sm md:text-base"><code><span className="text-[#ff79c6]">const</span> <span className="text-[#1e90ff]">aboutMe</span> <span className="text-white">=</span> <span className="text-white">&#123;</span>
  <span className="text-gray-400">role:</span> <span className="text-[#0f0]">"Full-Stack Developer"</span><span className="text-white">,</span>
  <span className="text-gray-400">passion:</span> <span className="text-[#0f0]">"Building scalable systems & sleek UIs"</span><span className="text-white">,</span>
  <span className="text-gray-400">mindset:</span> <span className="text-[#0f0]">"Curiosity, precision, real-world impact"</span><span className="text-white">,</span>
  <span className="text-gray-400">education:</span> <span className="text-[#0f0]">"Computer Engineering"</span><span className="text-white">,</span>
  <span className="text-gray-400">interests:</span> <span className="text-white">[</span>
    <span className="text-[#0f0]">"Backend Architecture"</span><span className="text-white">,</span>
    <span className="text-[#0f0]">"Frontend Development"</span><span className="text-white">,</span>
    <span className="text-[#0f0]">"AI/ML Applications"</span><span className="text-white">,</span>
    <span className="text-[#0f0]">"Database Design"</span>
  <span className="text-white">]</span>
<span className="text-white">&#125;;</span>

<span className="text-[#ff79c6]">export default</span> <span className="text-[#1e90ff]">aboutMe</span><span className="text-white">;</span></code></pre>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-gray-300 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
          >
            <p className="mb-4">
              I'm a Computer Engineering student and full-stack developer with a passion for building scalable backend systems and intuitive frontend interfaces. My journey in technology is driven by a desire to create solutions that make a real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
