import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../assets/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Shrinidhi2424" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shrinidhi-shetty-115154293/" },
    { icon: <FaTwitter />, url: "https://twitter.com/shrinidhi" },
    { icon: <FaEnvelope />, url: "mailto:shrinidhi.s.s1234@gmail.com" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="gradient-text"
            >
              Shrinidhi Shetty
            </motion.span>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
  <a 
    key={index} 
    href={link.url} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {link.icon}
  </a>
))}

            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shrinidhi Shetty. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;