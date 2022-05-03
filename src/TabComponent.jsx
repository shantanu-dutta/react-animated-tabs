import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import './styles.css';

const tabVariants = {
  active: {
    width: '55%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
  inactive: {
    width: '15%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
};

const tabTextVariants = {
  active: {
    opacity: 1,
    x: 0,
    display: 'block',
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  // default to a tab based on URl hash value
  useEffect(() => {
    const tabIndexFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );

    setActiveTabIndex(
      tabIndexFromHash !== -1 ? tabIndexFromHash : defaultIndex
    );
  }, [tabs, defaultIndex]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--active-color',
      tabs[activeTabIndex].color
    );

    return () => {};
  }, [activeTabIndex, tabs]);

  return (
    <div className="tabs-component">
      <ul className="tab-links" role="tablist">
        {tabs.map((tab, index) => (
          <motion.li
            key={tab.id}
            className={cn('tab', { active: activeTabIndex === index })}
            role="presentation"
            variants={tabVariants}
            animate={activeTabIndex === index ? 'active' : 'inactive'}
          >
            <a href={`#${tab.id}`} onClick={() => onTabClick(index)}>
              {tab.icon}
              <motion.span variants={tabTextVariants}>{tab.title}</motion.span>
            </a>
          </motion.li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <tab.content
          id={`${tab.id}-content`}
          key={tab.id}
          active={activeTabIndex === index}
        />
      ))}
    </div>
  );
};

export default TabComponent;
