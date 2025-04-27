import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, controls } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Name validation
    if (formData.name.length < 2) {
      toast({
        title: "Error",
        description: "Name must be at least 2 characters long",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Message validation
    if (formData.message.length < 10) {
      toast({
        title: "Error",
        description: "Message must be at least 10 characters long",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await apiRequest<{ success: boolean; message: string }>(
        'POST', 
        'http://localhost:5000/api/contact',
        formData
      );
      
      if (response.success) {
        setFormStatus('success');
        toast({
          title: "Success!",
          description: response.message || "Your message has been sent successfully.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(response.message || "Failed to send message");
      }
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      
    } catch (error: any) {
      setFormStatus('error');
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact" 
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
            <span className="text-[#1e90ff]">&lt;</span> Contact <span className="text-[#1e90ff]">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-[#121212] rounded-lg border border-gray-700 overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <div className="border-b border-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">terminal@nikhil:~/contact</div>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <div className="font-mono text-[#0f0]">
                    $ ping nikhil@kalburgi.dev
                  </div>
                  <div className="font-mono text-gray-300 mt-2">
                    <label htmlFor="name" className="block mb-1">Name: <span className="text-xs text-gray-500">(min. 2 characters)</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-[#0f0] text-white font-mono" 
                      placeholder="Enter your name"
                      minLength={2}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-mono text-gray-300">
                    <label htmlFor="email" className="block mb-1">Email: <span className="text-xs text-gray-500">(valid email required)</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-[#0f0] text-white font-mono" 
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="font-mono text-gray-300">
                    <label htmlFor="message" className="block mb-1">Message: <span className="text-xs text-gray-500">(min. 10 characters)</span></label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-[#0f0] text-white font-mono" 
                      placeholder="Enter your message"
                      minLength={10}
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-[#121212] border border-[#1e90ff] text-[#1e90ff] rounded-md 
                      hover:bg-[#1e90ff] hover:text-[#121212] transition duration-300 font-medium font-mono
                      ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'success' && (
                    <div className="mt-4 text-[#0f0]">
                      Message sent successfully!
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="mt-4 text-red-500">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
            variants={itemVariants}
          >
            <a href="https://github.com/nikhilkalburgi45" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 group-hover:border-[#0f0] transition duration-300">
                  <i className="fab fa-github text-2xl text-gray-300 group-hover:text-[#0f0] transition duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-[#0f0] transition duration-300">GitHub</span>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/nikhilkalburgi" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 group-hover:border-[#1e90ff] transition duration-300">
                  <i className="fab fa-linkedin-in text-2xl text-gray-300 group-hover:text-[#1e90ff] transition duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-[#1e90ff] transition duration-300">LinkedIn</span>
              </div>
            </a>
            
            <a href="mailto:nikhil@kalburgi.dev" className="group">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 group-hover:border-[#ff79c6] transition duration-300">
                  <i className="fas fa-envelope text-2xl text-gray-300 group-hover:text-[#ff79c6] transition duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-[#ff79c6] transition duration-300">Email</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
