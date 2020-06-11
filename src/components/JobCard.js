import React, { Component } from "react";

export default class JobCard extends Component {
  render() {
    if (this.props.job === undefined) return null;
    const { job } = this.props;
    return (
      <div>
        <img className="company__logo" src={job.logo} alt={job.company} />
        <div className="job__info">
          <div className="job__info--header">
            <div className="job__info__company__name">{job.company}</div>
            <div className="job__info--new">{job.new ? "new" : ""}</div>
            <div className="job__info--featured">
              {job.featured ? "featured" : ""}
            </div>
          </div>
          <div className="job__info--title">{job.position}</div>
          <div className="job__info--footer">
            <div className="job__info--time">{job.postedAt}</div>
            <div className="job__info--duration">{job.contract}</div>
            <div className="job__info--location">{job.location}</div>
          </div>
        </div>
        <div className="filters"></div>
      </div>
    );
  }
}
