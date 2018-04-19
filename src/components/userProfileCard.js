import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

import { Link } from "react-router-dom";

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
  info: {
    margin: 5
  },
  root: {
    margin: 20,
    display: "flex"
  },
  innerRoot: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  avatarWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  infoWrap: {
    display: "flex",
    flexDirection: "column"
  }
});

function ProfileCards(props) {
  const { classes } = props;
  const { firstName, lastName, address, phone, email, avatar, id } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot}>
        <Link to={`/${id}`} style={{ textDecoration: "none" }}>
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
                <Typography gutterBottom>Email: {email}</Typography>
              </div>
              <div>
                <Typography gutterBottom>Phone: {phone}</Typography>
              </div>
              <div>
                <Typography gutterBottom>City: {address.city}</Typography>
              </div>
            </div>
          </div>
        </Link>
      </Paper>
    </div>
  );
}

ProfileCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCards);
