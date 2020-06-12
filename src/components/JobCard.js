import React, { Component } from "react";
import Filters from "./Filters";

export default class JobCard extends Component {
  render() {
    if (this.props.job === undefined) return null;
    const { job } = this.props;
    return (
      <div className="JobCard">
        <img className="company__logo" src={job.logo} alt={job.company} />
        <div className="job__info">
          <div className="job__info--header">
            <p className="job__info__company__name">{job.company}</p>
            {job.new ? <p className="job__info--new">NEW</p> : null}
            {job.featured ? (
              <p className="job__info--featured">FEATURED</p>
            ) : null}
          </div>
          <div className="job__info--title">{job.position}</div>
          <div className="job__info--footer">
            <div className="job__info--time">{job.postedAt}</div>
            <div className="job__info--duration">{job.contract}</div>
            <div className="job__info--location">{job.location}</div>
          </div>
        </div>
        <div className="filters">
          {job.filters.map(filter => (
            <Filters filter={filter} />
          ))}
        </div>
      </div>
    );
  }
}
