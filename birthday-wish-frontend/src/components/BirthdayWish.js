import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Howl } from 'howler';

const BirthdayWish = ({ name, imageUrl }) => {
  const sound = new Howl({
    src: ['/birthday-song.mp3'],
    autoplay: true,
    loop: true,
  });

  return (
    <div className="birthday-wish">
      <Confetti />
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Happy Birthday, {name}!
      </motion.h1>
      <motion.img
        src={imageUrl}
        alt={name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Wishing you a fantastic day filled with joy and laughter!
      </motion.p>
    </div>
  );
};

export default BirthdayWish;