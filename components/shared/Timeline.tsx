import React, { useState, useEffect } from 'react';
import EventComponent from './EventComponent';
import events from '@/data/events.json';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / documentHeight;

      setScrollPosition(scrollFraction);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex">
      {/* Vertical Timeline Bar on the Left */}
      <div className="relative">
        <div
          className="w-2 ml-32 rounded-full h-full absolute left-0"
          style={{
            background: `linear-gradient(to bottom, #AC51D2 ${scrollPosition * 100}%, #6b7280 ${scrollPosition * 100}%)`,
          }}
        ></div>
      </div>

      {/* Event Cards on the Right */}
      <div className="ml-12 flex-grow">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative my-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="ml-8">
              <EventComponent event={event} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
