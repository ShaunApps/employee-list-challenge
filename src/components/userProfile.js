import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";

const styles = theme => ({
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  }
});

function ProfilePage(props) {
  const { classes } = props;
  return (
    <Grid item md={8} xs={12}>
      <Grid container spacing={24}>
        <Grid item md={4} xs={2}>
          <Avatar
            alt="Adelle Charles"
            src="https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={8}>
            <Grid item md={12} xs={12}>
              Name
            </Grid>
            <Grid item md={12} xs={12}>
              DoB
            </Grid>
            <Grid item md={12} xs={12}>
              Data
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
