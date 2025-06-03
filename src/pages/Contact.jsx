import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import '../assets/styles/contact.css';
import Footer from '../components/Footer';

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
              <h3>Email</h3>
              <a href="mailto:shrinidhi.s.s1234@gmail.com">shrinidhi.s.s1234@gmail.com</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/shrinidhi-shetty-115154293/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Shrinidhi2424" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
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