import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <>
        <Parent />
        <h3>Prop number is: {this.props.propNumber}</h3>
        <h3>Prop number is: {this.props.propString}</h3>
        <h3>Prop number is: {this.props.propObject.obj1}</h3>
      </>
    );
  }
}
App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  propNumber: 3,
  propString: "This is a props string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3",
    obj4: "I am obj 4"
  }
};
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
