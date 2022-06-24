import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '../context/GlobalContext';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalProvider>
  );
}

export default MyApp;
