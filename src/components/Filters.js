import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilters, displayList } from "../actions/index";

class Filters extends Component {
  onFilterClick = () => {
    this.props.addFilters(this.props.filter);
    this.props.displayList();
  };

  render() {
    return (
      <div className="filter__item" onClick={this.onFilterClick}>
        {this.props.filter}
      </div>
    );
  }
}

export default connect(null, { addFilters, displayList })(Filters);
