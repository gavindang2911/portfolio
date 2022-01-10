import { Box, Heading } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Typical from 'react-typical';
import Avatar from '../avatar/avatar';
import Section from '../section';

const NameTitle = () => {
  const color = useColorModeValue('#104c91', 'greenyellow');
  return (
    <Section>
      <Box
        display={{ md: 'flex' }}
        justifyContent="space-evenly"
        h="80vh"
        pt={40}
      >
        <Box align="center" mt={{ base: 5, md: 36 }}>
          <Heading variant="page-title" size="4xl">
            Gavin Dang
          </Heading>

          <Box color={color}>
            <h3>
              <Typical
                steps={['Software Developer', 1000, 'Designer', 1000]}
                wrapper="p"
                loop={Infinity}
              />
            </h3>
          </Box>
        </Box>
        <Avatar />
      </Box>
    </Section>
  );
};

export default NameTitle;
