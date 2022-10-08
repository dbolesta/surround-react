import Page from './components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxProjectHolder from './components/ParallaxProjectHolder';


function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Page>
          <ParallaxProjectHolder start='200px' end='-200px' />
          <ParallaxProjectHolder start='100px' end='-400px' />
          <ParallaxProjectHolder start='50px' end='200px' />
        </Page>
        <Page />
        <Page />
      </ParallaxProvider>
    </div>
  );
}

export default App;
