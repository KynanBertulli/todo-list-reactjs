import React from "react";

const initState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};
export default class ValidationForm extends React.Component {
  state = initState;
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let nameError = "";
    // let passwordError = "";
    let emailError = "";

    // check name
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    //   check email
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError || nameError) {
      this.setState({ emailError: emailError, nameError: nameError });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //   clear form  - if valid
      this.setState(initState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>{" "}
          {this.state.nameError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.nameError}{" "}
            </div>
          ) : null}{" "}
        </div>{" "}
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>{" "}
          {this.state.emailError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.emailError}{" "}
            </div>
          ) : null}{" "}
        </div>{" "}
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>{" "}
          {this.state.passwordError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.passwordError}{" "}
            </div>
          ) : null}{" "}
        </div>{" "}
        <button type="submit"> submit </button>{" "}
      </form>
    );
  }
}
