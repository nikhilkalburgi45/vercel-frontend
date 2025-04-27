import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Nikhil Kalburgi. Built with ❤️ in Node.js & React
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/nikhilkalburgi45" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0f0] transition duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nikhilkalburgi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1e90ff] transition duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:nikhil@kalburgi.dev" className="text-gray-400 hover:text-[#ff79c6] transition duration-300">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
