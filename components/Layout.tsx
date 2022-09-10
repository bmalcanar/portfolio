import { Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container pt={20}>
        <main>{children}</main>
      </Container>
    </>
  );
};
