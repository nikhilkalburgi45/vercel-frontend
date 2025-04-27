import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-40 bg-[#121212] bg-opacity-90 backdrop-blur-sm border-b transition-all duration-200 ${
      scrolled ? 'border-[#0f0] border-opacity-30' : 'border-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-[#0f0] font-jetbrains font-bold text-xl hover:text-[#1e90ff] transition duration-300">
          <span>&lt;</span>nikhil.kalburgi<span>/&gt;</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-gray-300 hover:text-[#0f0] transition duration-300">About</a>
          <a href="#skills" className="text-gray-300 hover:text-[#0f0] transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-[#0f0] transition duration-300">Projects</a>
          <a href="#certifications" className="text-gray-300 hover:text-[#0f0] transition duration-300">Certifications</a>
          <a href="#contact" className="text-gray-300 hover:text-[#0f0] transition duration-300">Contact</a>
          <a href="https://drive.google.com/file/d/1NiH1DzLNvlMt5EO4Bs6cylN10OkfUlQl/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#121212] border border-[#0f0] text-[#0f0] rounded hover:bg-[#0f0] hover:text-[#121212] transition duration-300">Resume</a>
          <a href="https://github.com/nikhilkalburgi45" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0f0] transition duration-300">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-kalburgi-79b157234" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0f0] transition duration-300">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 bg-[#121212] rounded-full text-[#0f0] hover:text-[#1e90ff] focus:outline-none"
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
        
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#0f0]"
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#121212] bg-opacity-95 border-b border-[#0f0] border-opacity-30`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#about" className="text-gray-300 hover:text-[#0f0] transition duration-300 py-2">About</a>
          <a href="#skills" className="text-gray-300 hover:text-[#0f0] transition duration-300 py-2">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-[#0f0] transition duration-300 py-2">Projects</a>
          <a href="#certifications" className="text-gray-300 hover:text-[#0f0] transition duration-300 py-2">Certifications</a>
          <a href="#contact" className="text-gray-300 hover:text-[#0f0] transition duration-300 py-2">Contact</a>
          <a href="https://drive.google.com/file/d/1aKbHvuVEPJ8TMoBfg2ORxfkTaFvd_RC7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#121212] border border-[#0f0] text-[#0f0] rounded hover:bg-[#0f0] hover:text-[#121212] transition duration-300 inline-block w-max">Resume</a>
          <div className="flex space-x-4 py-2">
            <a href="https://github.com/nikhilkalburgi45" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0f0] transition duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/nikhil-kalburgi-79b157234" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0f0] transition duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 bg-[#121212] rounded-full text-[#0f0] hover:text-[#1e90ff] focus:outline-none w-min"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
