import Footer from "./component/footer/Footer";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";

import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
