import React from 'react';
import { motion } from 'framer-motion';

const Bubbles = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="bubbles">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble}
          className="bubble"
          initial={{ y: '100vh', x: Math.random() * window.innerWidth }}
          animate={{ y: '-100vh' }}
          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear' }}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 20}px`,
            height: `${Math.random() * 50 + 20}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;