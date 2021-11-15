import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import "./App.css";
import img from "./vid/sunset.jpeg";

function App() {
console.log(window.innerHeight);

  return (
    <div className="App">
    <div
      style={{
        backgroundImage: `url(${img})`,
        height:`${window.innerHeight}`
      }}
      className="app-background"
    >
        <Header />
        <div className="app-second">
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
