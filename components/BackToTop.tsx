"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react'; // فرض بر این که lucide-react برای آیکون نصب است

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        background: visible ? [
          'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.15))',
          'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.15))',
          'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.15))'
        ] : 'transparent'
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        background: { duration: 2, repeat: Infinity, ease: 'linear' }
      }}
      whileHover={{ scale: 1.1 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(16, 185, 129, 0.15)', // رنگ سبز پیش‌فرض
        color: 'white',
        borderRadius: '50%',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000,
        pointerEvents: visible ? 'auto' : 'none',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default BackToTop;