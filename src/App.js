import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Router>
        <ContactBar className="app__contactBar" />
        <NavBar className="app__navBar" />

        <Switch>
          <Route path="/" exact>
            <Carousel className="app__carousel" />
            <AboutSection className="app__aboutSection" />
            <ProductsSection className="app__productsSection" />
            <BlogSection className="app__blogSection" />
          </Route>
        </Switch>

        <Switch>
          <Route path="/acerca" exact>
            <About className="app__about" />
          </Route>
        </Switch>

        <Footer className="app__footer" />
      </Router>
    </div>
  );
}

export default App;
