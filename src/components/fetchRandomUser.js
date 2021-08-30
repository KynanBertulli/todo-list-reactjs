import React from "react";

export default class FetchRandomUser extends React.Component {
  // need to know if data is fetched or completed
  state = {
    loading: true,
    people: [],
  };
  // component did mount atleast once
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>loading... </div>;
    }
    if (!this.state.people.length) {
      return <div>didn't find any people... </div>;
    }
    // const peopleJSX = this.state.people.map((person, i) => (
    //   // better to use a uuid than a index of array
    //   <div key={`some-person-${i}`}>
    //     <div>{person.name.title}</div>
    //     <div>{person.name.first}</div>
    //     <div>{person.name.last}</div>
    //     <img alt={"pic"} src={person.picture.large} />
    //   </div>
    // ));

    const peopleJSX = [];
    this.state.people.forEach((person) => {
      // better to use a uuid than a index of array
      peopleJSX.push(
        <div key={person.login.uuid}>
          <div>{person.name.title}</div>
          <div>{person.name.first}</div>
          <div>{person.name.last}</div>
          <img alt={"pic"} src={person.picture.large} />
        </div>
      );
    });
    return <div>{peopleJSX}</div>;
  }
}
