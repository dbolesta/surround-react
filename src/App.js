import Page from './components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxProjectHolder from './components/ParallaxProjectHolder';
import BackgroundTitle from './components/BackgroundTitle';
import { useState, useEffect } from "react";
import About from './components/About';


function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 1500
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  });




  return (
    <div className="App">
      <ParallaxProvider>
        <BackgroundTitle scroll={scroll}/>
        <Page>
          <ParallaxProjectHolder start='0' end='-10' inset='20vh 10vw auto auto' bg='red' size='145px'/>
          <ParallaxProjectHolder start='0' end='-400' inset='auto auto -15vh 48vw' bg='blue' size='205px'/>
          <ParallaxProjectHolder start='0' end='200' inset='auto auto 15vh 0' bg='green' size='100px'/>
        </Page>
        <Page>
          <ParallaxProjectHolder start='0' end='-100' inset='10vh 2vw auto auto' bg='yellow' size='245px'/>
          <ParallaxProjectHolder start='0' end='-430' inset='25vh auto auto 25vw' bg='purple' size='205px'/>
          <ParallaxProjectHolder start='0' end='90' inset='40vh auto auto 58vw' bg='orange' size='275px'/>
          <ParallaxProjectHolder start='0' end='275' inset='30vh auto auto 2vw' bg='ghostwhite' size='140px'/>
        </Page>
        <Page>
          <About />
        </Page>
      </ParallaxProvider>
    </div>
  );
}

export default App;
