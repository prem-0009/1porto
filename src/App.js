import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import "./App.css";
import img from "./vid/sunset.jpeg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="app-background"
    >
      <div className="App">
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
