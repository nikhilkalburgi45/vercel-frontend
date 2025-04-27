import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  iconBg: string;
  description: string;
  year: string;
  link: string;
}

const CertificationsSection = () => {
  const { ref, controls } = useScrollReveal();

  const certifications: Certification[] = [
    {
      title: "IBM Database & SQL",
      issuer: "IBM",
      icon: "fas fa-database",
      iconBg: "bg-blue-900",
      description: "Comprehensive SQL database management certification covering advanced queries, stored procedures, and database design.",
      year: "2022",
      link: "https://drive.google.com/file/d/1iL5hAvIgwf4OMKC_zNW0vktwEmBXwiER/view?usp=drive_link"
    },
    {
      title: "Meta Frontend Developer",
      issuer: "Meta",
      icon: "fab fa-react",
      iconBg: "bg-indigo-900",
      description: "Professional certification in modern frontend development with React, including state management, hooks, and performance optimization.",
      year: "2023",
      link: "https://drive.google.com/file/d/1hzxZjxg-MDaG_LdeStkY9YFkETtVDBLM/view?usp=drive_link"
    },
    {
      title: "LeetCode SQL 50 Badge",
      issuer: "LeetCode",
      icon: "fas fa-code",
      iconBg: "bg-green-900",
      description: "Earned SQL badge by solving over 50 database-related problems, demonstrating proficiency in complex query optimization.",
      year: "Ongoing",
      link: "https://leetcode.com/u/nikhilkalburgi21/"
    },
    {
      title: "HackerRank SQL Badges",
      issuer: "Basic & Intermediate",
      icon: "fas fa-trophy",
      iconBg: "bg-purple-900",
      description: "Achieved SQL badges in both basic and intermediate categories, with expertise in complex joins, window functions, and performance tuning.",
      year: "2023",
      link: "https://drive.google.com/drive/folders/1irrQoCLPj4wEEIh-My7_m4m0qJD6G0zp?usp=drive_link"
    }
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

  return (
    <motion.section 
      id="certifications" 
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
          <h2 className="text-3xl font-bold font-jetbrains inline-block relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#0f0] after:mt-1">
            <span className="text-[#0f0]">&lt;</span> Certifications & Achievements <span className="text-[#0f0]">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg p-6 hover:border-[#0f0] transition duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${cert.iconBg} rounded-full flex items-center justify-center text-white mr-4`}>
                  <i className={`${cert.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{cert.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#1e90ff] text-sm">{cert.year}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0f0] hover:underline text-sm"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
