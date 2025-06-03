import { motion } from 'framer-motion';
import { useState } from 'react';
import Cert1 from "../certificates/Certi-1.jpg";
import Cert2 from "../certificates/Certi-2.jpg";
import Cert3 from "../certificates/Certi-3.jpg";
import Cert4 from "../certificates/Certi-4.jpg";
import "../assets/styles/certificates.css";

const Certificates = () => {
  const [certificates] = useState([
    {
      id: 1,
      title: "Online SEO Training Courses",
      issuer: "Improve SEO Courses",
      date: "May 16, 2025",
      issuedDate: "May 18, 2025",
      image: Cert1, // Update with actual path
      verificationLink: "https://verify.onwingspan.com"
    },
    {
      id: 2,
      title: "Linux Programming Foundation Certification",
      issuer: "TechA",
      date: "May 18, 2025",
      issuedDate: "May 18, 2025",
      image: Cert2, // Update with actual path
      verificationLink: "https://verify.onwingspan.com"
    },
    {
      id: 3,
      title: "Programming using Java",
      issuer: "Course Provider",
      date: "February 16, 2025",
      issuedDate: "February 16, 2025",
      image: Cert3, // Update with actual path
      verificationLink: "https://verify.onwingspan.com"
    },
    {
      id: 4,
      title: "Hardware Description Languages for FPGA Design",
      issuer: "University of Colorado Boulder (via Coursera)",
      date: "April 3, 2025",
      issuedDate: "April 3, 2025",
      image: Cert4, // Update with actual path
      verificationLink: "https://coursera.org/verify/DAQEOI9DQS0W",
      instructors: ["Timothy Scherr", "Benjamin Spriggs"]
    }
  ]);

  return (
    <section className="certificates-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="certificate-card"
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">Completed: {cert.date}</p>
                {cert.issuedDate && cert.issuedDate !== cert.date && (
                  <p className="certificate-issued">Issued: {cert.issuedDate}</p>
                )}
                {cert.instructors && (
                  <div className="certificate-instructors">
                    <p className="instructors-label">Instructors:</p>
                    {cert.instructors.map((instructor, idx) => (
                      <p key={idx} className="instructor-name">{instructor}</p>
                    ))}
                  </div>
                )}
                <a 
                  href={cert.verificationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-link"
                >
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;