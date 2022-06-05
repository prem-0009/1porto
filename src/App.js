import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import "./App.css";
// import img from "./vid/sunset.jpeg";

function App() {
  return (
    <div className="App">
      <img />
      <div className="app-second">
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
