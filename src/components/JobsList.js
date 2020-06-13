import React, { Component } from "react";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
        {this.props.jobsList.map(job => (
          <JobCard key={uuidv4()} job={job} />
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
