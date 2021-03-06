import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as projectActions from "../../actions/ProjectActions";
import ProjectView from "../../components/ProjectView";
const Project = ({ projectData, actions }) => {
  const updateDetails = (value) => {
    let obj = {
      query: value,
    };
    actions.updateDetails(obj);
  };
  return (
    <>
      <ProjectView projectData={projectData} updateDetails={updateDetails} />
    </>
  );
};
Project.propTypes = {
  projectData: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    projectData: state.projectData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateDetails: bindActionCreators(projectActions.updateDetails, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
