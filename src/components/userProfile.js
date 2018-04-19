import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  paperRoot: {
    padding: 10,
    width: 700,
    height: 250,
    flexShrink: 1
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  root: {
    margin: 20,
    display: "flex"
  },
  innerRoot: {
    display: "flex",
    justifyContent: "space-around"
  },
  avatarWrap: {
    display: "flex",
    justifyContent: "center"
  },
  infoWrap: {
    display: "flex",
    flexDirection: "column"
  }
});

function removeDuplicates(arr) {
  let unique_array = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) == -1) {
      unique_array.push(arr[i]);
    }
  }
  return unique_array;
}

function ProfilePage(props) {
  const {
    firstName,
    lastName,
    address,
    phone,
    email,
    avatar,
    id,
    tags,
    dob,
    city
  } = props;
  const { classes } = props;
  // let formattedTags = removeDuplicates(tags);

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot}>
        <div className={classes.innerRoot}>
          <div className={classes.avatarWrap}>
            <Avatar alt="some user" src={avatar} className={classes.avatar} />
          </div>
          <div className={classes.infoWrap}>
            <div>
              <Typography
                variant="headline"
                gutterBottom
              >{`${firstName} ${lastName}`}</Typography>
            </div>
            <div>
              <Typography gutterBottom>Phone: {phone}</Typography>
            </div>
            <div>
              <Typography gutterBottom>Email: {email}</Typography>
            </div>
            <div>
              <Typography gutterBottom>City: {city}</Typography>
            </div>
            <div>
              <Typography gutterBottom>Date of birth: {dob}</Typography>
            </div>
            <div>
              <Typography gutterBottom>Tags: {tags}</Typography>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
