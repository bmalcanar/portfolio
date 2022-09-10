import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';
import { PlatformPath } from 'path';

interface Props extends LinkProps {
  href: any;
  path?: PlatformPath;
  target?: string;
  children?: ReactNode;
}

export const LinkItem: React.FC<Props> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
