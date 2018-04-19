import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers, sortByLastName, filterByCity } from "../actions/index";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

import ProfileCard from "../components/userProfileCard";
import UserProfile from "../components/userProfile";
import SectionProfile from "../components/userSection";

const styles = theme => ({
  root: {
    paddingTop: 75,
    display: "flex",
    flexDirection: "column"
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  textField: {},
  button: {},
  formContainer: {
    display: "flex"
  }
});

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { isFilteredByCity: false, input: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchUsers();
  }

  handleClick(e) {
    e.preventDefault();
    let city = this.state.input;
    if (city == "") {
      this.props.sortByLastName();
    } else this.props.filterByCity(city);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
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
        <form onSubmit={this.handleClick} className={classes.formContainer}>
          <TextField
            id="city"
            label="City"
            className={classes.textField}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            onClick={this.handleClick}
            variant="raised"
            color="secondary"
            className={classes.button}
          >
            Filter by City
          </Button>
        </form>

        <div className={classes.root}>{this.renderSectionCards()}</div>
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
    { fetchUsers, sortByLastName, filterByCity },
    dispatch
  );
}

const styledUserList = withStyles(styles)(UserList);
export default connect(mapStateToProps, mapDispatchToProps)(styledUserList);
