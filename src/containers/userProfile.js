import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ComponentUserProfile from "../components/userProfile";
import { fetchUser } from "../actions/index";

import { withStyles } from "material-ui/styles";
import { Divider } from "material-ui";
import Button from "material-ui/Button";

const styles = theme => ({
  root: {},
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
    return <ComponentUserProfile user={this.props.user} />;
  }

  render() {
    const { classes } = this.props;
    const { pathname } = this.props.location;

    return (
      <div className={classes.root}>
        <div>{this.renderUserProfile()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

const styledUserProfile = withStyles(styles)(UserProfile);
export default connect(mapStateToProps, mapDispatchToProps)(styledUserProfile);
