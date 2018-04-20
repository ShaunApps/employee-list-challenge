import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers, sortByLastName, filterByCity } from "../actions/index";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from "material-ui/TextField";

import SectionProfile from "../components/userSection";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

const styles = theme => ({
  rootMaster: { backgroundColor: "#FAFAFA" },
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
  formContainer: {
    display: "flex",
    marginLeft: 25
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
      <div style={{ padding: 15 }} className={classes.rootMaster}>
        <div className={classes.formContainer}>
          <form onSubmit={this.handleClick}>
            <TextField
              id="city"
              label="City"
              placeholder="Enter city name here "
              className={classes.textField}
              onChange={this.handleChange}
              margin="normal"
            />

            <IconButton onClick={this.handleClick}>
              <Icon>filter_list</Icon>
            </IconButton>
          </form>
        </div>
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
