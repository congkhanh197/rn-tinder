import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconWithBadge from "../../../components/IconWithBadge";

function FavoriteIconWithBadge(props) {
  return <IconWithBadge {...props} badgeCount={props.peopleList.length} />;
}

const mapStateToProps = state => ({
  peopleList: state.favoriteReducer.peopleList
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIconWithBadge);
