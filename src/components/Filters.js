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
      <p className="job__info__filter__item" onClick={this.onFilterClick}>
        {this.props.filter}
      </p>
    );
  }
}

export default connect(null, { addFilters, displayList })(Filters);
