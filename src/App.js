import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/imageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/Validationform";
import FetchRandomUser from "./components/fetchRandomUser";
import TodoList from "./components/TodoList";
class App extends Component {
  // add(a, b) {
  //   return a + b;
  // }

  state = {
    visible: true,
    count: 0,
  };

  // componentDidMount() {
  //   console.log("mounting... ");
  // }
  // componentWillUnmount() {
  //   console.log("unmounting... ");
  // }
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
    // const buttonText = this.state.visible ? "hide" : "show";
    // const slider = this.state.visible ? <Counter /> : null;
    return (
      <div className="App">
        {/* {slider}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button> */}
        {/* <MyForm /> */}
        {/* <FetchRandomUser /> */}
        {/* <Counter
          count={this.state.count}
          increment={this.handleButtonClick}
          decrement={this.handleButtonClick2}
        />
        <Counter
          count={this.state.count}
          increment={this.handleButtonClick}
          decrement={this.handleButtonClick2}
        /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;
