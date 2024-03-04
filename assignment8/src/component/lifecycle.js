import React, { Component } from 'react'
import '../App.css';


export class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", count: 0 };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {

    console.log("button clicked...");
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return (
      <div>

        <button onClick={this.onClick}>Click</button>

        <LifeCycle count={this.state.count} />
      </div>
    );
  }
}


export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called...");
  }
  render() {
    return (

      <div>
        LifeCycle
        {console.log(" calling render....")}
      </div>
    )
  }
  componentDidMount() {
    console.log("component DidMount called....");
  }

  componentDidUpdate() {

    console.log("componentDidUpdate called .....");
  }

  componentDidCatch() {
    console.log("componentDidCatch called...");
  }

  componentWillUnmount() {
    console.log("act like finally WillUnmount....");
  }
}

export default LifeCycle;