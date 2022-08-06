import './App.css';
import GlobalStyles from './styles/GLobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Theme';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Home from './sections/Home';
import Feature from './sections/Feature';
import { AnimatePresence } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';
import Themes from './sections/Themes';
import Characteristics from './sections/Characteristics';
import Album from './sections/Album';
import ShowRoom from './sections/ShowRoom';
import { Faq } from './sections/Faq';
function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <Feature />
              <Album />
              <Themes/>
              <ShowRoom />
              <Faq/>
    
      

            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
