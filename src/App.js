import Page from './components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxProjectHolder from './components/ParallaxProjectHolder';
import BackgroundTitle from './components/BackgroundTitle';
import { useState, useEffect, useRef } from "react";
import About from './components/About';
import images from './images';

import useOnScreen from './hooks/useOnScreen';


function App() {
  // const [scroll, setScroll] = useState(0);

  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, "-30%");

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY < 1500
  //     if (scrollCheck !== scroll) {
  //       setScroll(scrollCheck)
  //     }
  //   })
  // });

//   size='145px'
// size='205px'
// size='100px'
// size='245px'
// size='205px'
// size='275px'
// size='140px'

// size='245px'
// size='305px'
// size='200px'
// size='345px'
// size='305px'
// size='375px'
// size='240px'


  return (
    <div className="App">
      <ParallaxProvider>
        <BackgroundTitle onScreen={onScreen}/>
        <Page>
          <ParallaxProjectHolder start='0px' end='-10px' inset='10vh 10vw auto auto' bg='red' size='22vw' img={images[1]}/>
          <ParallaxProjectHolder start='0px' end='-400px' inset='70vh 24vw auto auto' bg='blue' size='25vw' img={images[2]}/>
          <ParallaxProjectHolder start='0px' end='200px' inset='68vh auto auto 1vw' bg='green' size='19vw' img={images[3]}/>
        </Page>
        <Page>
          <ParallaxProjectHolder start='0px' end='-100px' inset='10vh 2vw auto auto' bg='yellow' size='30vw' img={images[4]}/>
          <ParallaxProjectHolder start='100px' end='-430px' inset='25vh auto auto 25vw' bg='purple' size='25vw' img={images[5]}/>
          <ParallaxProjectHolder start='0px' end='90px' inset='40vh auto auto 58vw' bg='orange' size='38vw' img={images[6]}/>
          <ParallaxProjectHolder start='0px' end='275px' inset='30vh auto auto 2vw' bg='ghostwhite' size='24vw' img={images[0]}/>
        </Page>
        {/* <Page/> */}
        <Page>
          <About innerRef={ref} />
        </Page>
        {/* <div>
          <div style={{ height: "100vh" }}>
            <h1>Scroll down to next section 👇</h1>
          </div>
          <div
            ref={ref}
            style={{
              height: "100vh",
              backgroundColor: onScreen ? "#23cebd" : "#efefef",
            }}
          >
            {onScreen ? (
              <div>
                <h1>Hey I'm on the screen</h1>
                <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
              </div>
            ) : (
              <h1>Scroll down 300px from the top of this section 👇</h1>
            )}
          </div>
        </div> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
