import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import ProfileCard from "./userProfileCard";
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 45
  },
  letter: {
    margin: 5,
    fontSize: 12
  },
  letterSection: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: 18
  },
  profileCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
    // justifyContent: "space-evenly"
  }
});

function renderSortedProfileCards(users) {
  return Object.keys(users).map(user => {
    let { firstName, lastName, address, phone, email, avatar, id } = users[
      user
    ];
    return (
      <ProfileCard
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        address={address}
        phone={phone}
        email={email}
        avatar={avatar}
      />
    );
  });
}

function SectionProfile(props) {
  const { classes } = props;
  const { letter, users } = props;
  return (
    <div className={classes.root}>
      <div xs={12} md={12} className={classes.letterSection}>
        <div>{letter.toUpperCase()}</div>
      </div>
      <div xs={12} md={12} className={classes.profileCards}>
        {renderSortedProfileCards(users)}
      </div>
    </div>
  );
}

SectionProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionProfile);
