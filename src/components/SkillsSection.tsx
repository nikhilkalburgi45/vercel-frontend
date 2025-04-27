import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Skill {
  name: string;
  percentage: number;
}

const SkillsSection = () => {
  const { ref, controls } = useScrollReveal();

  const languages: Skill[] = [
    { name: "C++", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Python", percentage: 80 },
    { name: "TypeScript", percentage: 75 }
  ];

  const frontend: Skill[] = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 75 },
    { name: "Tailwind CSS", percentage: 80 }
  ];

  const backend: Skill[] = [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 80 },
    { name: "FastAPI", percentage: 75 },
    { name: "API Design", percentage: 85 }
  ];

  const databases: Skill[] = [
    { name: "MySQL", percentage: 90 },
    { name: "MongoDB", percentage: 85 },
    { name: "Weaviate", percentage: 70 },
    { name: "SQL", percentage: 90 }
  ];

  const tags = [
    { name: "C++", color: "neon-green" },
    { name: "JavaScript", color: "electric-blue" },
    { name: "Python", color: "hot-pink" },
    { name: "React", color: "neon-green" },
    { name: "Node.js", color: "electric-blue" },
    { name: "Express.js", color: "hot-pink" },
    { name: "TypeScript", color: "neon-green" },
    { name: "MySQL", color: "electric-blue" },
    { name: "MongoDB", color: "hot-pink" },
    { name: "Weaviate", color: "neon-green" },
    { name: "FastAPI", color: "electric-blue" },
    { name: "REST API", color: "hot-pink" },
    { name: "JWT", color: "neon-green" },
    { name: "SQL", color: "electric-blue" },
    { name: "LangChain", color: "hot-pink" }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-[#0f0]">{skill.percentage}%</span>
      </div>
      <div className="skill-bar bg-gray-700">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const renderSkillCategory = (title: string, skills: Skill[]) => (
    <motion.div 
      className="bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg"
      variants={itemVariants}
    >
      <div className="border-b border-gray-700 px-4 py-2 flex items-center">
        <div className="text-sm text-gray-400">{title}</div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {skills.map(skill => renderSkillBar(skill))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section 
      id="skills" 
      className="py-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold font-jetbrains inline-block relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#1e90ff] after:mt-1">
            <span className="text-[#1e90ff]">&lt;</span> Technical Skills <span className="text-[#1e90ff]">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {renderSkillCategory("Languages", languages)}
          {renderSkillCategory("Frontend", frontend)}
          {renderSkillCategory("Backend", backend)}
          {renderSkillCategory("Databases", databases)}
        </div>
        
        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {tags.map((tag, index) => (
              <motion.span 
                key={index}
                className={`px-3 py-1 bg-[#121212] border rounded-full text-sm ${
                  tag.color === 'neon-green' 
                    ? 'border-[#0f0] text-[#0f0]' 
                    : tag.color === 'electric-blue' 
                    ? 'border-[#1e90ff] text-[#1e90ff]' 
                    : 'border-[#ff79c6] text-[#ff79c6]'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    delay: 0.1 + (index * 0.05),
                    duration: 0.4
                  }
                }}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
