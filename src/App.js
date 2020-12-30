import Caroussel from "./components/Carousel";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="app">
      <ContactBar className="app__contactBar" />
      <NavBar className="app__navBar" />
      <Carousel />
    </div>
  );
}

export default App;
