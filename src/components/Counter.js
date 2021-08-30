import React from "react";
import logo from "../logo.svg";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("mounting... ");
  }
  componentWillUnmount() {
    console.log("unmounting... ");
  }
  //   handleButtonClick() {
  //     console.log("button logged");
  //   }
  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleButtonClick2 = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div> count: {this.props.count} </div>
        <button onClick={this.props.increment}> increment </button>
        <button onClick={this.props.decrement}> decrement </button>
      </div>
    );
  }
}
