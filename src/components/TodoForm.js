import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.text === "") {
      return null;
    } else {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
      });
    }
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="add a todo..."
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>add a todo</button>
        </form>
      </div>
    );
  }
}
