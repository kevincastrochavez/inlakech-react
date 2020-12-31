import Caroussel from "./components/Carousel";
import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="app">
      <ContactBar className="app__contactBar" />
      <NavBar className="app__navBar" />
      <Carousel className="app__carousel" />
      <AboutSection className="app__aboutSection" />
    </div>
  );
}

export default App;
