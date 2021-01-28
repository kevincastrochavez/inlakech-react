import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
import Plants from "./components/Plants";
import Pots from "./components/Pots";
import Hangers from "./components/Hangers";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Router>
        <ContactBar className="app__contactBar" />
        <NavBar className="app__navBar" />

        <Switch>
          <Route path="/" exact>
            <Homepage className="app__homepage" />
          </Route>

          <Route path="/acerca" exact>
            <About className="app__about" />
          </Route>

          <Route path="/productos" exact>
            <Products />
          </Route>

          <Route path="/productos/plantas">
            <Plants className="app__products-plants" />
          </Route>

          <Route path="/productos/macetas">
            <Pots className="app__products-pots" />
          </Route>

          <Route path="/productos/colgantes">
            <Hangers className="app__products-hangers" />
          </Route>
        </Switch>

        <Footer className="app__footer" />
      </Router>
    </div>
  );
}

export default App;
