import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AnimatedText from '../components/AnimatedText';
import '../assets/styles/home.css';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';

const Home = () => {
  const skills = [
    "React", "JavaScript", "Python", "Node.js", "HTML/CSS", "Git"
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "4", label: "Certifications" },
    { number: "2+", label: "Years Learning" }
  ];

  return (
    <div className="home-page">
      <Navbar />
      
      <main className="hero-section">
        <div className="hero-content-enhanced">
          <div className="hero-main">
            <AnimatedText 
              text="Hi, I'm Shrinidhi" 
              className="hero-title"
            />
            <AnimatedText 
              text="Front-End Developer & Python Developer" 
              delay={0.5}
              className="hero-subtitle"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-description"
            >
              I create beautiful, functional digital experiences with modern technologies.
              Passionate about crafting clean code and intuitive user interfaces that bring ideas to life.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="hero-skills"
            >
              <h3>Technologies I work with:</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="hero-stats"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.2 }}
                  className="stat-item"
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="hero-buttons"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="primary-btn"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="secondary-btn"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="hero-side"
          >
            <div className="highlight-box">
              <h4>Currently Learning</h4>
              <p>Exploring advanced React patterns, TypeScript, and cloud technologies to build scalable applications.</p>
            </div>
            
            <div className="highlight-box">
              <h4>Available For</h4>
              <p>Front-end development projects, Python automation tasks, and collaborative coding opportunities.</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </main>
      
      <Certificates />
      
      {/* Other sections like Skills, Experience, etc. */}
      <Footer />
    </div>
  );
};

export default Home;