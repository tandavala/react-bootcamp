import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <Parent />;
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Just some info</h2>
        <Cars msg="cars are cool" model="3245" coolCars={this.props.cars} />
      </div>
    );
  }
}
Parent.defaultProps = {
  cars: ["BMW", "MERC", "City", "Audi"]
};
class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>

        {this.props.coolCars.map((item, i) => {
          return item + " ";
        })}
      </div>
    );
  }
}
export default App;
