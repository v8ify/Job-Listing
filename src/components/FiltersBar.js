import React, { Component } from "react";
import { connect } from "react-redux";
import FilterItem from "./FilterItem";

class FiltersBar extends Component {
  render() {
    if (!this.props.filters || !this.props.filters[0]) return null;
    return (
      <div className="FiltersBar">
        {this.props.filters.map(filter => (
          <FilterItem filter={filter} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(FiltersBar);
