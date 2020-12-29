import ContactBar from "./components/ContactBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <ContactBar className="app__contactBar" />
      <NavBar className="app__navBar" />
    </div>
  );
}

export default App;
