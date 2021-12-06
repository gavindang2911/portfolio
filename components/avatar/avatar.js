import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const Avatar = () => {
  return (
    <Box flexShrink={4} mt={{ base: 5, md: 12 }} align="center">
      <Image
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        maxWidth="350px"
        display="inline-block"
        borderRadius="full"
        src="/images/profile-image.jpg"
        alt="Profile image"
      />
    </Box>
  );
};

export default Avatar;
