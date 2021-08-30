import React from "react";

//
/*
1. shallow merge - only goes one level, does not work with multi-level objects states
2. async - does not immediatlely change after setting state, 
    use a callback function if you need to access this values change

 */

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
    ],
    index: 0,
  };

  handleNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  render() {
    if (this.state.index > 3) {
      this.setState({
        index: 0,
      });
    }
    if (this.state.index < 0) {
      this.setState({
        index: 3,
      });
    }
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index - 1,
            });
          }}
        >
          {" "}
          previous image
        </button>
        <img
          alt={"hello"}
          style={{
            width: 100,
            height: 100,
          }}
          src={this.state.images[this.state.index]}
        />
        <button onClick={this.handleNext}> next image</button>
      </div>
    );
  }
}
