import React from 'react';
import PropTypes from 'prop-types';
import {
  
  IconLinkedin,
  IconTwitter,
} from '../Icons';

const Icon = ({ name }) => {
  switch (name) {
    
   
    case 'Linkedin':
      return <IconLinkedin />;
   
    case 'Twitter':
      return <IconTwitter />;
   
  }
};

// Icon.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Icon;
