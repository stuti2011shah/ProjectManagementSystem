import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { ChakraProvider, CSSReset, extendTheme, ColorModeScript } from '@chakra-ui/react';
import './index.css';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

// Define the theme for light and dark mode
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // default is light mode, can be set to 'dark'
    useSystemColorMode: false, // if true, it will automatically switch based on system preference
  },
  styles: {
    global: (props) => ({
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      'html, body': {
        background: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
        height: '100vh',
        overflowY: 'hidden',
      }
    })
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CSSReset />
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
