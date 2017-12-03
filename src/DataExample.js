import React, { Component } from "react";

class DataExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      passedInData: props.importantData // name this whatever you want
    };
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.passedInData}</h2>
        <h6>
          or if this is more convient you can just access it through props
        </h6>
        <h2>{this.props.importantData}</h2>
      </div>
    );
  }
}

export default DataExample;
