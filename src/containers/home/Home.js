import React from "react";
import { connect } from "react-redux";
import Home from "../../components/pages/home/Home";
import { changeBaseUrl } from "../../store/app/actions";

const HomeContainer = props => <Home {...props} />;
const mapStateToProps = state => ({
  user: state.app.user,
  entities: state.app.entities,
  baseUrl: state.app.baseUrl
});

const mapDispatchToProps = dispatch => ({
  changeBaseUrl: url => dispatch(changeBaseUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
