import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_xk2lkoe', 
      'template_9ebpi9s', 
      form.current, 
      'lQ2fa-1SgONGShBqa'
    )
    .then((result) => {
      setStatus('success');
      setMessage('Message sent successfully!');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, (error) => {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <motion.form 
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="contact-form"
    >
      <div className="form-group">
  <label htmlFor="name">Name</label>
  <input 
    type="text" 
    id="name" 
    name="from_name"   // Updated
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="email">Email</label>
  <input 
    type="email" 
    id="email" 
    name="from_email"  // Updated
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="subject">Subject</label>
  <input 
    type="text" 
    id="subject" 
    name="title"        // Updated
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea 
    id="message" 
    name="message"      // Already correct
    rows="5" 
    required 
  />
</div>

      
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'sending'}
        className={`submit-btn ${status}`}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : status === 'success' ? (
          <>
            <FaCheck /> Sent!
          </>
        ) : status === 'error' ? (
          <>
            <FaExclamationTriangle /> Error
          </>
        ) : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </motion.button>
      
      {message && (
        <motion.div 
          className={`status-message ${status}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {message}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;