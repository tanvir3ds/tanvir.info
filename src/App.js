import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Skills from './components/Pages/Skills';
import Experience from './components/Pages/Experience';
import Project from './components/Pages/Project';
import Contact from './components/Pages/Contact';




function App() {
  return (
    <>
      <Router>
        <NavBar>
        </NavBar>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
