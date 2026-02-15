import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { resumeData } from '../data/resumeData';
import '../assets/styles/about.css';

const About = () => {
  // Group skills by category
  const skillCategories = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const achievements = [
    { icon: "🎓", title: "Education", desc: "B.E. Computer Science (9.55 CGPA)" },
    { icon: "💻", title: "Full Stack", desc: "Next.js, React, Spring Boot" },
    { icon: "🤖", title: "AI Engineering", desc: "RAG, LangChain, Gemini" },
    { icon: "🚀", title: "Problem Solving", desc: "Data Structures & Algorithms" }
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
                <h2>Who am I?</h2>
                <p>{resumeData.about.description}</p>
                <p>
                  I specialize in building scalable web applications and integrating AI solutions.
                  My academic journey at Sahyadri College of Engineering has equipped me with a strong foundation in Computer Science,
                  reflected in my 9.55 CGPA.
                </p>
                <p>
                  I'm constantly pushing the boundaries of what's possible with code, from architecting microservices to fine-tuning LLMs.
                </p>
              </div>

              <div className="achievements-grid">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="achievement-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="achievement-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="skills-section">
          <div className="skills-container">
            <h2>Technical Arsenal</h2>

            {Object.entries(skillCategories).map(([category, skills], catIndex) => (
              <div key={category} className="skills-category">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-icon-large">
                        <skill.icon />
                      </div>
                      <h4>{skill.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-container">
            <h2>Education Journey</h2>

            <div className="timeline">
              {resumeData.education.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.duration}</span>
                    <h3>{item.degree}</h3>
                    <h4>{item.institution}</h4>
                    <p>{item.score}</p>
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