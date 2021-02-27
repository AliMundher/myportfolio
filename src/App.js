
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/Nav/navbar";
import Footer from "./components/Footer/footer";
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
          <div className="socialLink text-center mt-4">
            <a href="https://www.facebook.com/ali.mundher.927">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/mundher-ali-b65719180/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.behance.net/mundersaee8f64">
              <i className="fa fa-behance" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/mundhersaeed/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
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
        {/* <Footer /> */}
      </BrowserRouter >
    );
  }
}

export default App;
