import { Flex, Button, Text, useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Notifications from '../components/Notifications';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w='100vw' h='100vh' justify='space-between'>
      <Flex w='220px' borderRightWidth='1px'>
        nav
      </Flex>
      <Flex w='678px' flexDir='column' p={3}>
        <Flex w='full' justify='end'>
          {colorMode === 'light' ? (
            <IconButton
              icon={<MoonIcon />}
              size='sm'
              onClick={toggleColorMode}
            />
          ) : (
            <IconButton
              icon={<SunIcon />}
              size='sm'
              onClick={toggleColorMode}
            />
          )}
        </Flex>
        <Notifications />
      </Flex>
      <Flex w='220px' borderLeftWidth='1px'>
        aside
      </Flex>
    </Flex>
  );
}
