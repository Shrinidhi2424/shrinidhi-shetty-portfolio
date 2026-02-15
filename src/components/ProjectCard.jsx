import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image-placeholder">
        <FaCode style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.1)' }} />
        <div className="project-overlay">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="View Code">
              <FaGithub />
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="View Live">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Optional: Show detailed bullet points if space permits, or usually description is enough for card */}
        <ul className="project-details-list">
          {project.details.slice(0, 2).map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>

        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;