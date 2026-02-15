import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { resumeData } from '../data/resumeData';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../assets/styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="contact-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <h3><FaEnvelope /> Email</h3>
              <p>Feel free to send me an email.</p>
              <a href={`mailto:${resumeData.email}`} className="email-link">
                {resumeData.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <h3>Social</h3>
              <p>Connect with me on social media.</p>
              <div className="social-links">
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <FaGithub /> GitHub
                </a>
                {/* Add Twitter if available in resumeData or keep as fallback */}
                <a href="https://twitter.com/shrinidhi" target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <FaTwitter /> Twitter
                </a>
              </div>
            </motion.div>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;