import { AppBar, List, RaisedButton, ListItem } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import React, { Component } from "react";

export default class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, bio, city },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <div
            style={{
              display: "grid",
              placeItems: "center",
              marginTop: "50px",
            }}
          >
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
            <br />
            <RaisedButton
              primary={false}
              onClick={this.back}
              style={{ margin: 15, width: "250px" }}
              label="Back"
            ></RaisedButton>
            <RaisedButton
              primary={true}
              onClick={this.continue}
              style={{ margin: 15, width: "250px" }}
              label="Confirm & Continue"
            ></RaisedButton>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
