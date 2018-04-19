import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ComponentUserProfile from "../components/userProfile";
import { fetchUser } from "../actions/index";

import { withStyles } from "material-ui/styles";
import { Divider } from "material-ui";

const styles = theme => ({
  root: {
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

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let id = this.props.location.pathname;
    this.props.fetchUser(id);
  }

  renderUserProfile() {
    let {
      firstName,
      lastName,
      phone,
      email,
      address,
      avatar,
      id,
      tags,
      dob
    } = this.props.user.user;
    return (
      <ComponentUserProfile
        firstName={firstName}
        lastName={lastName}
        address={address}
        phone={phone}
        email={email}
        avatar={avatar}
        id={id}
        tags={tags}
        dob={dob}
      />
    );
  }

  render() {
    const { classes } = this.props;
    const { pathname } = this.props.location;

    return <div>{this.renderUserProfile()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

const styledUserProfile = withStyles(styles)(UserProfile);
export default connect(mapStateToProps, mapDispatchToProps)(styledUserProfile);
