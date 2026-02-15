import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa'; // Import an icon for placeholder
import { resumeData } from '../data/resumeData';
import "../assets/styles/certificates.css";

const Certificates = () => {
  return (
    <section className="certificates-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications
        </motion.h2>

        <div className="certificates-grid">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="certificate-card"
            >
              <div className="certificate-icon-wrapper">
                <FaAward className="cert-icon" />
              </div>

              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">Issued: {cert.date}</p>

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;