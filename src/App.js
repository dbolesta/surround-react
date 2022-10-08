import Page from './components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxProjectHolder from './components/ParallaxProjectHolder';
import BackgroundTitle from './components/BackgroundTitle';


function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BackgroundTitle />
        <Page>
          <ParallaxProjectHolder start='0' end='-10' inset='20vh 10vw auto auto' bg='red'/>
          <ParallaxProjectHolder start='0' end='-400' inset='auto auto 0 48vw' bg='blue'/>
          <ParallaxProjectHolder start='0' end='200' inset='auto auto 0 0' bg='green'/>
        </Page>
        <Page />
        <Page />
      </ParallaxProvider>
    </div>
  );
}

export default App;
