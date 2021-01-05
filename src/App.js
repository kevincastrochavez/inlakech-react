import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
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
        </Switch>

        <Switch>
          <Route path="/acerca" exact>
            <About className="app__about" />
          </Route>
        </Switch>

        <Switch>
          <Route path="/productos" exact>
            <Products className="app__products" />
          </Route>
        </Switch>

        <Footer className="app__footer" />
      </Router>
    </div>
  );
}

export default App;
