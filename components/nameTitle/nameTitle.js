import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'
import Avatar from '../avatar/avatar'
import Section from '../section'
import SmallTitleText from './smallTitleText'

function NameTitle() {
    return (
        <Section delay={0.2}>
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
              <SmallTitleText text="Believer / Developer / Designer"></SmallTitleText>
            </Box>
            <Avatar />
          </Box>
        </Section>
    )
}

export default NameTitle
