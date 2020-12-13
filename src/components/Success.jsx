import { AppBar, RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import React, { Component } from "react";

export default class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <div
            style={{
              display: "grid",
              placeItems: "center",
              marginTop: "50px",
            }}
          >
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
