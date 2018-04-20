import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

import {
  phoneNumber,
  formatDate,
  formatEmail,
  formatTags
} from "../helpers/index";

const styles = theme => ({
  paperRoot: {
    padding: 30,
    margin: 75,
    maxWidth: 600,
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
    borderStyle: "solid",
    color: "#263238"
  },
  root: {
    margin: 20,
    display: "flex",
    flexDirection: "column"
  },
  innerRoot: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10
  },
  avatarWrap: {
    display: "flex",
    justifyContent: "center",
    margin: 40
  },
  infoWrap: {
    display: "flex",
    flexDirection: "column",
    margin: 40
  }
});

function ProfilePage(props) {
  let { firstName, lastName, phone, email, avatar, id, dob, tags } = props.user;
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="raised" color="secondary">
            Back to List
          </Button>{" "}
        </Link>
      </div>
      <Paper md={6} xs={12} className={classes.paperRoot}>
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
              <Typography gutterBottom>Phone: {phoneNumber(phone)}</Typography>
            </div>
            <div>
              <Typography gutterBottom>Email: {formatEmail(email)}</Typography>
            </div>
            {/* <div>
              <Typography gutterBottom>City: {address.city}</Typography>
            </div> */}
            <div>
              <Typography gutterBottom>
                Date of birth: {formatDate(dob)}
              </Typography>
            </div>
            <div>
              <Typography gutterBottom>Tags: {formatTags(tags)}</Typography>
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
