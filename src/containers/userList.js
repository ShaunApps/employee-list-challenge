import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers, sortByCity } from "../actions/index";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";

import ProfileCard from "../components/userProfileCard";
import UserProfile from "../components/userProfile";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    paddingTop: 75
  },
  paper: {},
  control: {
    padding: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderSortedProfileCards() {
    return this.props.users.users.map(user => {
      let { firstName, lastName, address, phone, email, avatar, id } = user;
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

  renderProfileCards() {
    return this.props.users.users.map(user => {
      let { firstName, lastName, address, phone, email, avatar, id } = user;

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

  render() {
    const { classes } = this.props;
    const { users } = this.props;
    return (
      <div style={{ padding: 30 }}>
        <Button
          onClick={this.props.sortByCity}
          variant="raised"
          color="secondary"
          className={classes.button}
        >
          Filter by City
        </Button>
        <Grid
          container
          className={classes.root}
          spacing={40}
          alignItems="center"
          direction="row"
          justify="center"
        >
          {this.renderSortedProfileCards()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, sortByCity }, dispatch);
}

const styledUserList = withStyles(styles)(UserList);
export default connect(mapStateToProps, mapDispatchToProps)(styledUserList);
