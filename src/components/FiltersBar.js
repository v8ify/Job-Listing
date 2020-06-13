import React, { Component } from "react";
import { connect } from "react-redux";
import { clearFilters, displayList } from "../actions/index";
import FilterItem from "./FilterItem";

class FiltersBar extends Component {
  onClearClick = () => {
    this.props.clearFilters();
    this.props.displayList();
  };

  render() {
    if (!this.props.filters || !this.props.filters[0]) return null;
    return (
      <div className="FiltersBar">
        {this.props.filters.map(filter => (
          <FilterItem filter={filter} />
        ))}
        <p className="FiltersBar__clear" onClick={this.onClearClick}>
          Clear
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(mapStateToProps, { clearFilters, displayList })(
  FiltersBar
);
