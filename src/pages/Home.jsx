import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedText from '../components/AnimatedText';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';
import { resumeData } from '../data/resumeData';
import '../assets/styles/home.css';

const Home = () => {
  // Stats derived from experience
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "5+", label: "Projects Built" },
    { number: "3+", label: "Certifications" }
  ];

  return (
    <div className="home-page">
      <Navbar />

      <main className="hero-section">
        <div className="hero-content-enhanced">
          <div className="hero-main">
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              HELLO, I'M
            </motion.p>

            <AnimatedText
              text={resumeData.name}
              className="hero-title gradient-text"
            />

            <AnimatedText
              text={resumeData.title}
              delay={0.5}
              className="hero-subtitle"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-description"
            >
              {resumeData.about.summary}
            </motion.p>

            {/* Skills Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="hero-skills"
            >
              <h3>Tech Stack</h3>
              <div className="skills-scroll">
                {resumeData.skills.slice(0, 7).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="skill-icon"
                    title={skill.name}
                  >
                    <skill.icon />
                  </motion.div>
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
              <NavLink  // Changed from motion.a href to NavLink to prevent refresh
                to="/projects"
                className="primary-btn"
              >
                View My Work
              </NavLink>

              <NavLink
                to="/contact"
                className="secondary-btn"
              >
                Contact Me
              </NavLink>
            </motion.div>
          </div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="hero-side"
          >
            <div className="glow-circle"></div>

            <div className="highlight-box">
              <h4>Currently Working On</h4>
              <p>
                {resumeData.projects[0].description} based on <strong>{resumeData.projects[0].tech[0]}</strong> & <strong>{resumeData.projects[0].tech[2]}</strong>.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </main>

      <Certificates />

      <Footer />
    </div>
  );
};

export default Home;