import {
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Article } from '../components/Article';
import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { Section } from '../components/Section';

const ContainerImage = chakra(Image, {
  shouldForwardProp: (prop: any) =>
    ['width', 'height', 'src', 'alt'].includes(prop),
});

const skills = [
  { name: 'React', src: '/png/react.png' },
  { name: 'Angular', src: '/png/angular.png' },
  { name: 'Nextjs', src: '/png/nextjs.png' },
  { name: 'Ionic', src: '/png/ionic.png' },
  { name: 'Node.js', src: '/png/nodejs.png' },
  { name: 'HTML', src: '/png/html.png' },
  { name: 'CSS', src: '/png/css.png' },
  { name: 'Sass', src: '/png/sass.png' },
  { name: 'ES6', src: '/png/es6.png' },
  { name: 'Tailwind', src: '/png/tailwind.png' },
  { name: 'Chakra UI', src: '/png/chakra.png' },
];

const Home: NextPage = () => {
  return (
    <Article>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a Software Engineer based in Philippines!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Birger Martin DC. Alcanar
            </Heading>
            <p>Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ContainerImage
                src="/images/bm.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={10}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={5}
            borderRadius="lg"
          >
            {skills.map((skill, index) => {
              return (
                <GridItem w="100%" h="auto" textAlign="center">
                  <ContainerImage
                    key={index}
                    src={skill.src}
                    alt={skill.name}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                  <p>{skill.name}</p>
                </GridItem>
              );
            })}
          </Grid>
        </Section>
      </Container>
    </Article>
  );
};

export default Home;
