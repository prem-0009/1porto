import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
