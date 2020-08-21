import React from 'react';

// Components
import Biography from './Biography';
import Skills from './Skills';
import Associations from './Associations';

import './About.css';

const About = () => {
  return (
    <>
      <Biography/>
      <Skills />
      <Associations />
    </>
  );
};

export default About;
