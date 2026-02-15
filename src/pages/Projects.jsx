import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resumeData';
import '../assets/styles/projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar />

      <main className="container">
        <section className="projects-header">
          <motion.h1
            className="gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Showcasing innovative solutions in AI, Full Stack Development, and Data Engineering.
          </motion.p>
        </section>

        <section className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;