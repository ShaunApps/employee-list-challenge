import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import { phoneNumber, formatEmail } from "../helpers/index";

import { Link } from "react-router-dom";

const styles = theme => ({
  paperRoot: {
    padding: 15,
    margin: 15,
    // width: 700,
    // height: 250,
    flexShrink: 1
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
    borderStyle: "solid",
    color: "#263238"
  },
  info: {
    margin: 5
  },
  root: {
    // margin: 20,
    display: "flex"
  },
  innerRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10
  },
  avatarWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginRight: 40
  },
  infoWrap: {
    display: "flex",
    flexDirection: "column",
    margin: 5,
    marginLeft: 40
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
                <Typography noWrap gutterBottom>
                  Email: {formatEmail(email)}
                </Typography>
              </div>
              <div>
                <Typography gutterBottom>
                  Phone: {phoneNumber(phone)}
                </Typography>
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
