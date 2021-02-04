import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
import Plants from "./components/Plants";
import Pots from "./components/Pots";
import Hangers from "./components/Hangers";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <div className="app">
      <Router>
        <ContactBar className="app__contactBar" />
        <NavBar className="app__navBar" />

        <Switch>
          <Route path="/auth">{!user ? <Login /> : <h1>Signed In</h1>}</Route>

          <Route path="/" exact>
            <Homepage className="app__homepage" />
          </Route>

          <Route path="/acerca">
            <About className="app__about" />
          </Route>

          <Route path="/productos">
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
