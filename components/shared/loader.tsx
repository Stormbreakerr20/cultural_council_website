import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/assets/loader.json';

const loader: React.FC = () => {
  return (
    <div>
      <h1>Your Component with Lottie Animation</h1>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{ height: 300, width: 300 }} // You can adjust the size as needed
      />
    </div>
  );
};

export default loader;
