import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import ProfileCard from "./userProfileCard";
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justify: "center",
    alignItems: "flex-start"
  },
  profiles: {
    direction: "row",
    justify: "flex-start",
    flexGrow: 1
  },
  letter: {
    margin: 5,
    fontSize: 12
  },
  letterSection: {
    marginBottom: 100
  },
  profileCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
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
      <div>{letter.toUpperCase()}</div>
      <div className={classes.profileCards}>
        {renderSortedProfileCards(users)}
      </div>
    </div>
  );
}

SectionProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionProfile);
