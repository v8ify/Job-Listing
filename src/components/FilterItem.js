import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFilters, displayList } from "../actions/index";

class FilterItem extends Component {
  onFilterClick = () => {
    this.props.deleteFilters(this.props.filter);
    this.props.displayList();
  };

  render() {
    return (
      <div className="FilterItem">
        {this.props.filter}{" "}
        <i className="fas fa-times" onClick={this.onFilterClick}></i>
      </div>
    );
  }
}

export default connect(null, { deleteFilters, displayList })(FilterItem);
