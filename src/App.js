
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/Nav/navbar";
import Contact from "./components/Contact/contact";
import Index from "./components/index";
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
        </div>

        <Nav />
        <Container>
          <Route exact path="/" component={Index} />
          <Route path="/contact" component={Contact} />
        </Container>
      </BrowserRouter >
    );
  }
}

export default App;
