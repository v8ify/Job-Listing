import React, { Component } from "react";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import data from "./data.json";
import { parseJobsList, addFilters, displayList } from "../actions/index";

class JobsList extends Component {
  async componentDidMount() {
    await this.props.parseJobsList(data);
    await this.props.addFilters("");
    this.props.displayList();
  }

  render() {
    if (!this.props.jobsList || !this.props.jobsList[0]) return null;
    return (
      <div className="JobsList">
        JobCard
        {this.props.jobsList.map(job => (
          <JobCard job={job} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobsList: state.displayList,
  };
};

export default connect(mapStateToProps, {
  parseJobsList,
  addFilters,
  displayList,
})(JobsList);
