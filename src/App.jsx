import GlobalStyle from './global-styled';
import Header from './components/Header/Header';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Careers />
      <Product />

      <Footer />
    </>
  );
}

export default App;
