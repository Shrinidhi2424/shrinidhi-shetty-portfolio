import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';
import '../assets/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: resumeData.github },
    { icon: <FaLinkedin />, url: resumeData.linkedin },
    { icon: <FaEnvelope />, url: `mailto:${resumeData.email}` }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <motion.span
              whileHover={{ scale: 1.05 }}
            >
              {resumeData.logoText}
            </motion.span>
            <p className="footer-desc">
              Crafting digital experiences with code and creativity. Let's build something amazing together.
            </p>
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
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {resumeData.name}. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;