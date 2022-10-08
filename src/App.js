import Page from './components/Page';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Page start='-200px' end='500px' />
        <Page start='-50px' end='200px' />
        <Page start='-200px' end='400px' />
      </ParallaxProvider>
    </div>
  );
}

export default App;
