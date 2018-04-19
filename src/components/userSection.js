import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import ProfileCard from "./userProfileCard";
const styles = theme => ({});

function renderSortedProfileCards(users) {
  return Object.keys(users).map(user => {
    let { firstName, lastName, address, phone, email, avatar, id } = users[
      user
    ];
    return (
      <ProfileCard
        key={id}
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
    <Grid item md={12}>
      <Grid item>{letter}</Grid>
      <Grid container>{renderSortedProfileCards(users)}</Grid>
    </Grid>
  );
}

SectionProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionProfile);
