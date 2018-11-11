import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";
import AppTab from "./components/Tab";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12">
              <Header />
              <AppTab />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
