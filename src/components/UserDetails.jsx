import { AppBar, RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import React, { Component } from "react";

export default class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter User Details" />
          <div
            style={{
              display: "grid",
              placeItems: "center",
              marginTop: "50px",
            }}
          >
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <RaisedButton
              primary={true}
              label="Continue"
              onClick={this.continue}
              style={{ margin: 15, width: "250px" }}
            >
            </RaisedButton>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
