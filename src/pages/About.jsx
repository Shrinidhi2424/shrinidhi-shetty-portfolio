import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import '../assets/styles/about.css';

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Bubble", level: 75 },
    { name: "CSS", level: 85 },
    { name: "Python", level: 70 }
  ];

  const achievements = [
    { icon: "🎓", title: "Computer Science Student", desc: "Currently pursuing CS Engineering" },
    { icon: "💻", title: "Frontend Developer", desc: "Building Frontend applications" },
    { icon: "🐍", title: "Python Developer", desc: "Building robust backend solutions" },
    { icon: "🚀", title: "Problem Solver", desc: "Passionate about innovative solutions" }
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="about-hero">
          <div className="about-container">
            <AnimatedText 
              text="About Me" 
              className="section-title"
            />
            
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="about-text">
                <h2 className="gradient-text">Who am I?</h2>
                <p>
                  I'm Shrinidhi Shetty, a passionate Full Stack Developer and UI/UX Designer with over 5 years of experience creating digital experiences that matter.
                </p>
                <p>
                  My journey in tech started when I built my first website at 16, and since then I've been obsessed with creating beautiful, functional applications that solve real problems.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
                </p>
              </div>
              
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="skills-section">
          <div className="skills-container">
            <h2>My Skills</h2>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span>{skill.level}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="experience-section">
          <div className="experience-container">
            <h2>My Journey</h2>
            
            <div className="timeline">
              {[
                 {
                     year: "2023 - 2027",
                     role: "Computer Science Engineering Student",
                     company: "Sahyadri College of Engineering and Management, Mangalore",
                     description: "Pursuing a Bachelor's degree in Computer Science, developing strong skills in software development, web technologies, and problem-solving."
                 }
                ].map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </motion.main>
      
      <Footer />
    </div>
  );
};

export default About;