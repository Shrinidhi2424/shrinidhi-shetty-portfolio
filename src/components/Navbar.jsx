import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: 'https://uhv-nine.vercel.app/', name: 'UHV Blog', external: true },
  ];

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { 
      opacity: 0, 
      y: 20, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Shrinidhi Shetty
          </motion.span>
        </NavLink>

        <div className="desktop-links">
          {links.map((link) =>
            link.external ? (
              <a  
                   key={link.path} 
                href={link.path} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {link.name}
      </motion.span>
    </a>
  ) : (
    <NavLink 
      key={link.path} 
      to={link.path}
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {link.name}
      </motion.span>
    </NavLink>
  )
)}

        </div>

        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 7 },
              closed: { rotate: 0, y: 0 }
            }}
          />
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 }
            }}
          />
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: -45, y: -7 },
              closed: { rotate: 0, y: 0 }
            }}
          />
        </button>
      </div>

      <motion.div 
        className="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { 
            height: 'auto',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            height: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3
            }
          }
        }}
      >
       {links.map((link) => (
  <motion.div key={link.path} variants={itemVariants}>
    {link.external ? (
      <a 
        href={link.path} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </a>
    ) : (
      <NavLink 
        to={link.path} 
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        {link.name}
      </NavLink>
    )}
  </motion.div>
))}

      </motion.div>
    </motion.nav>
  );
};

export default Navbar;