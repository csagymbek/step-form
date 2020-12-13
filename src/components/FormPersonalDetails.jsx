import { AppBar, RaisedButton, TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import React, { Component } from "react";

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter Personal Details" />
          <div
            style={{
              display: "grid",
              placeItems: "center",
              marginTop: "50px",
            }}
          >
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br />
            <RaisedButton
              primary={false}
              variant="contained"
              onClick={this.back}
              style={{ margin: 15, width: "250px" }}
              label="Back"
            >
            </RaisedButton>
            <RaisedButton
              primary={true}
              variant="contained"
              onClick={this.continue}
              style={{ margin: 15, width: "250px" }}
              label="Continue"
            >
            </RaisedButton>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
