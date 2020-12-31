import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <ContactBar className="app__contactBar" />
      <NavBar className="app__navBar" />
      <Carousel className="app__carousel" />
      <AboutSection className="app__aboutSection" />
      <ProductsSection className="app__productsSection" />
      <Footer className="app__footer" />
    </div>
  );
}

export default App;
