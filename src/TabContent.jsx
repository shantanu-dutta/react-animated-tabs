import React from 'react';
import { motion } from 'framer-motion';

import cardImage from './assets/card-image.jpg';

const cards = ['Yosemite', 'New York', 'India', 'Chicago'];

const tabContentVariants = {
  active: {
    display: 'block',
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: 'none',
  },
};

const cardVariants = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const TabContent = ({ id, active }) => {
  return (
    <motion.div
      role="tabpanel"
      id={id}
      className="tab-content"
      variants={tabContentVariants}
      animate={active ? 'active' : 'inactive'}
    >
      <div className="cards">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="content-card"
            variants={cardVariants}
          >
            <img src={cardImage} alt="view of mountain" />
            <div className="info">
              <h3>{item} - From $800</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TabContent;
