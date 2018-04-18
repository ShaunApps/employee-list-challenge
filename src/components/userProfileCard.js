import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";

const styles = theme => ({
  paper: {},
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

function ProfileCards(props) {
  const { classes } = props;
  const { firstName, lastName, address, phone, email, avatar } = props;
  return (
    <Grid item md={6} xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={40}>
          <Grid item md={4}>
            <Avatar
              alt="Adelle Charles"
              src={avatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item md={8}>
            <Grid container spacing={16}>
              <Grid item md={12}>
                <div>{`${firstName} ${lastName}`}</div>
              </Grid>
              <Grid item md={12}>
                <div>Email: {email}</div>
              </Grid>
              <Grid item md={12}>
                <div>Phone: {phone}</div>
              </Grid>
              <Grid item md={12}>
                <div>City: {address.city}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

ProfileCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCards);
