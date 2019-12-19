import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Component life cycle</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Body />
      </div>
    );
  }
}
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _random: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber() {
    this.setState({
      text: "Find my favorate random number",
      _random: Math.floor(Math.random() * 10)
    });
  }
  render() {
    return (
      <div>
        <p className="App-intro">Calcular meu random number</p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Number _random={this.state._random} />
      </div>
    );
  }
}

class Number extends Component {
  componentWillMount() {
    console.log("COmponent will mount called here");
    // alert("Component will mount");
  }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps ");
    //alert("component did mount");
  }
  componentDidMount() {
    console.log("component did mount");
    //alert("component did mount");
  }
  componentWillUnmount() {
    console.log("Desejas sair");
    alert("Desejas sair");
  }
  render() {
    return (
      <div>
        <p>{this.props._random}</p>
      </div>
    );
  }
}

export default App;
