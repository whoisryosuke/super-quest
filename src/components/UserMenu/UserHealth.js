import React from "react";
import { connect } from "react-redux";

const UserHealth = ({ health }) => <div>{health}</div>;

const mapStateToProps = state => {
  let health;
  if ("user" in state) {
    health = state.user.health;
  } else {
    health = 0;
  }
  return {
    health
  };
};

export default connect(mapStateToProps)(UserHealth);
