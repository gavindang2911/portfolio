import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { ListItem, Link } from '@chakra-ui/layout';
import React from 'react';
import FadeInWhenVisible from '../fadeIn';

const SocialMediaLink = ({ href, icon, title }) => {
  return (
    <FadeInWhenVisible>
      <ListItem>
        <Link href={href} target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={icon} />}
          >
            {title}
          </Button>
        </Link>
      </ListItem>
    </FadeInWhenVisible>
  );
};

export default SocialMediaLink;
