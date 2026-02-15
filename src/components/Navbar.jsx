import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { resumeData } from '../data/resumeData';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ];

  const sidebarVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {resumeData.logoText}
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
                {link.name}
              </a>
            ) : link.isHash ? (
              <a key={link.path} href={link.path}>{link.name}</a>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      <motion.div
        className="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {links.map((link) => (
          link.external ? (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          )
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;