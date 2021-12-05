import React from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react';

const SmallTitleText = ({ text, lower }) => {
  const color = useColorModeValue('orange', 'greenyellow');
  // const lowerStatus = {lower};
  // console.log(lowerStatus);
  return (
    <Box color={color}>

      {lower=="true"? <div>{text}</div>:<h3>{text}</h3>}
    </Box>
  );
};

export default SmallTitleText;
