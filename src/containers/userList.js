import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers, sortByCity, sortByLastName } from "../actions/index";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";

import ProfileCard from "../components/userProfileCard";
import UserProfile from "../components/userProfile";
import SectionProfile from "../components/userSection";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    paddingTop: 75
  },
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
  constructor(props) {
    super(props);
    this.state = { isFilteredByCity: false };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchUsers();
  }

  handleClick() {
    this.state.isFilteredByCity
      ? this.props.sortByLastName()
      : this.props.sortByCity();
    this.setState(prevState => ({
      isFilteredByCity: !prevState.isFilteredByCity
    }));
  }

  renderSectionCards() {
    return Object.keys(this.props.users.sortedUsers).map(section => {
      return (
        <SectionProfile
          key={section}
          letter={section}
          users={this.props.users.sortedUsers[section]}
        />
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 30 }}>
        <Button
          onClick={this.handleClick}
          variant="raised"
          color="secondary"
          className={classes.button}
        >
          Sort by {this.state.isFilteredByCity ? "Name" : "City"}
        </Button>
        <Grid container className={classes.root} spacing={40} direction="row">
          {this.renderSectionCards()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchUsers, sortByCity, sortByLastName },
    dispatch
  );
}

const styledUserList = withStyles(styles)(UserList);
export default connect(mapStateToProps, mapDispatchToProps)(styledUserList);
