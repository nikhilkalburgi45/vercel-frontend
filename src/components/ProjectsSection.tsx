import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectTag {
  name: string;
}

interface Project {
  title: string;
  description: string;
  filename: string;
  tags: ProjectTag[];
  details: string[];
  codeSnippet: string;
  githubLink: string;
}

const ProjectsSection = () => {
  const { ref, controls } = useScrollReveal();

  const projects: Project[] = [
    {
      title: "Microservice-Driven Flight Booking",
      description: "A scalable flight booking system built with a microservices architecture.",
      filename: "Flight-Booking-Service",
      tags: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MySQL" },
        { name: "JWT" },
        { name: "API Gateway" }
      ],
      details: [
        "Implemented five distinct microservices for flight search, booking, user management, payment, and notification",
        "Designed API Gateway for unified client access",
        "Secured with JWT-based authentication",
        "Horizontally scalable architecture",
        "Managed distributed transactions across services"
      ],
      codeSnippet: `const app = express();
app.use('/api/v1', apiRouter);`,
      githubLink: "https://github.com/nikhilkalburgi45/Microservice-Driven-Flight-Booking"
    },
    {
      title: "Nutrition Tracker",
      description: "A comprehensive nutrition tracking application with personalized insights.",
      filename: "Nutrition-Tracker",
      tags: [
        { name: "React" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "JWT" }
      ],
      details: [
        "Developed interactive React frontend with chart visualizations",
        "Built RESTful API with Express.js for data operations",
        "Implemented MongoDB database with Mongoose for data modeling",
        "Created JWT authentication with refresh token rotation",
        "Designed responsive UI for mobile and desktop"
      ],
      codeSnippet: `const UserSchema = new Schema({
  name: String,
  email: String,
  goals: Object
});`,
      githubLink: "https://github.com/nikhilkalburgi45/nutrition_tracker/tree/main"
    },
    {
      title: "Sentiment Analysis (SIH 2023)",
      description: "LSTM-based sentiment classifier with a React UI for real-time analysis.",
      filename: "Sentiment-Analysis-SIH",
      tags: [
        { name: "LSTM" },
        { name: "React" },
        { name: "Python" },
        { name: "TensorFlow" }
      ],
      details: [
        "Trained LSTM neural network for multi-class sentiment classification",
        "Achieved 91% accuracy on test data",
        "Built React frontend for real-time text analysis",
        "Implemented Python FastAPI backend to serve the model",
        "Created visualization dashboard for sentiment trends"
      ],
      codeSnippet: `def create_model():
  model = Sequential()
  model.add(LSTM(64))
  return model`,
      githubLink: "#"
    },
    {
      title: "DocRAG: Intelligent Document Q&A Chatbot",
      description: "Final Year Project: A document analysis chatbot using Retrieval Augmented Generation.",
      filename: "DocRAG",
      tags: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "FastAPI" },
        { name: "LangChain" },
        { name: "Weaviate" }
      ],
      details: [
        "Developed React + TypeScript frontend with chat interface",
        "Built RAG backend with FastAPI, LangChain, and Weaviate",
        "Implemented document chunking and vector embedding",
        "Created Node.js + Express + MongoDB authentication system",
        "Designed session management and chat history features"
      ],
      codeSnippet: `from langchain.vectorstores import Weaviate
from langchain.chains import RetrievalQA`,
      githubLink: "https://github.com/Arraj2611/doc_RAG.git"
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
      id="projects" 
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
          <h2 className="text-3xl font-bold font-jetbrains inline-block relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#ff79c6] after:mt-1">
            <span className="text-[#ff79c6]">&lt;</span> Projects <span className="text-[#ff79c6]">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card h-96"
              variants={itemVariants}
            >
              <div className="project-card-inner h-full">
                {/* Project Card Front */}
                <div className="project-card-front bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg h-full">
                  <div className="border-b border-gray-700 px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-400">{project.filename}</div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0f0] mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 bg-[#121212] border border-[#1e90ff] text-[#1e90ff] rounded-md text-xs"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto text-sm text-gray-400">
                      <p>Hover to see more details</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Card Back */}
                <div className="project-card-back bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg h-full">
                  <div className="border-b border-gray-700 px-4 py-2 flex items-center justify-between">
                    <div className="text-sm text-gray-400">Project Details</div>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#0f0] hover:text-white">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#0f0] mb-2">{project.title}</h3>
                    <div className="text-gray-300 text-sm mb-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <pre className="text-xs bg-black bg-opacity-50 p-2 rounded overflow-auto">
                        <code>
                          {project.codeSnippet.split('\n').map((line, lineIndex) => {
                            let parts = [];
                            let lastIndex = 0;
                            
                            // Keywords - pink
                            const keywordRegex = /\b(const|let|var|function|def|from|import|return|add)\b/g;
                            let keywordMatch;
                            while ((keywordMatch = keywordRegex.exec(line)) !== null) {
                              if (keywordMatch.index > lastIndex) {
                                parts.push(<span key={`${lineIndex}-text-${lastIndex}`}>{line.substring(lastIndex, keywordMatch.index)}</span>);
                              }
                              parts.push(<span key={`${lineIndex}-keyword-${keywordMatch.index}`} className="text-[#ff79c6]">{keywordMatch[0]}</span>);
                              lastIndex = keywordMatch.index + keywordMatch[0].length;
                            }
                            
                            // Variables/Classes - blue
                            const variableRegex = /\b(app|model|UserSchema|Sequential|LSTM)\b/g;
                            let variableMatch;
                            let tempLine = line;
                            let offset = 0;
                            
                            while ((variableMatch = variableRegex.exec(tempLine)) !== null) {
                              const actualIndex = variableMatch.index + offset;
                              if (actualIndex > lastIndex) {
                                parts.push(<span key={`${lineIndex}-text-${lastIndex}`}>{line.substring(lastIndex, actualIndex)}</span>);
                              }
                              parts.push(<span key={`${lineIndex}-variable-${actualIndex}`} className="text-[#1e90ff]">{variableMatch[0]}</span>);
                              lastIndex = actualIndex + variableMatch[0].length;
                            }
                            
                            // Strings - green
                            const stringRegex = /"([^"]*)"/g;
                            let stringMatch;
                            tempLine = line;
                            offset = 0;
                            
                            while ((stringMatch = stringRegex.exec(tempLine)) !== null) {
                              const actualIndex = stringMatch.index + offset;
                              if (actualIndex > lastIndex) {
                                parts.push(<span key={`${lineIndex}-text-${lastIndex}`}>{line.substring(lastIndex, actualIndex)}</span>);
                              }
                              parts.push(<span key={`${lineIndex}-string-${actualIndex}`} className="text-[#0f0]">{stringMatch[0]}</span>);
                              lastIndex = actualIndex + stringMatch[0].length;
                            }
                            
                            // Add any remaining text
                            if (lastIndex < line.length) {
                              parts.push(<span key={`${lineIndex}-text-${lastIndex}`}>{line.substring(lastIndex)}</span>);
                            }
                            
                            // If no matches were found, just use the plain line
                            if (parts.length === 0) {
                              parts.push(<span key={`${lineIndex}-text-0`}>{line}</span>);
                            }
                            
                            return (
                              <div key={lineIndex}>
                                {parts}
                              </div>
                            );
                          })}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
