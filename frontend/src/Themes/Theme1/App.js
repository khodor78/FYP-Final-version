import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import Main from './components/Main';

import ScrollToTop from './components/ScrolToTop';
import { LightTheme } from './components/Themes';

import GlobalStyle from './globalStyles';
import SoundBar from './subComponent/SoundBar';
import "normalize.css";
function App() {
  
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
        <Main/>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
