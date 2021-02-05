
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/Nav/navbar";
import Contact from "./components/Contact/contact";
import Index from "./components/index";
import About from "./components/About/about";
import Services from "./components/Services/services";
import MyWork from "./components/MyWork/my-work";
import CV from "./components/CV/cv";
import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="reserved">
          <h3 className="title">all reserve by mundher</h3>
        </div>
        <div className="mundher">
          <h3 className="title">mundher saeed</h3>
          <h4 className="job text-center display-5">junior Web Developer</h4>
        </div>

        <Nav />
        <Container>
          <Route exact path="/" component={Index} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/mywork" component={MyWork} />
          <Route path="/cv" component={CV} />
        </Container>
      </BrowserRouter >
    );
  }
}

export default App;
