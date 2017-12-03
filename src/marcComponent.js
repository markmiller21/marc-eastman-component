import React, { Component } from "react";

import DataExample from "./DataExample";

class Marc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    // some fetch function here.  This is where you are losing me
    // when you say "script" I am not sure what that means.  I get it is a node
    // file but not sure how you are getting that data.

    // A typical fetch would look like this....
    // fetch("https://davidwalsh.name/").then(function(responseObj) {
    //   console.log("responseObj: ", responseObj);
    //   console.log("status: ", responseObj.status);
    //   this.setState({
    //     data: responseObj,
    //     loading: false
    //   });
    // });

    // couldn't find a working API but see this is you want to do something with querying
    // https://cloud.google.com/bigquery/create-simple-app-api#bigquery-simple-app-build-service-nodejs
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(function(response) {
        console.log("responseObj: ", response);
        this.setState({
          data: response,
          loading: false
        });

        // upon this setState call you will have access to the data in any way that you want
        // you can pass this to a prop if you want.
        // line 60 is where I am passing data into prop
      });
  }

  render() {
    return (
      <div className="App">
        <h2>This is the Marc Component</h2>
        {this.state.loading ? (
          <div>
            <h1>BE PATIENT BRO!</h1>
            <h1>We need a working api for this to return results!</h1>
          </div>
        ) : (
          <div>
            <h6>your data is here</h6>
            <h2>{this.state.data}</h2>
            {/* __ */}
            {/* ^^^ this guy  fucks */}

            {/* this is how you pass data as a prop into another component */}
            <DataExample importantData={this.state.data} />
          </div>
        )}
      </div>
    );
  }
}

export default Marc;
