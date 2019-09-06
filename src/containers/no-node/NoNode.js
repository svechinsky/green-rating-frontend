import React from "react";
import { connect } from "react-redux";
import NoNode from "../../components/pages/no-node/NoNode";

const NoNodeContainer = props => <NoNode {...props} />;
const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoNodeContainer);
