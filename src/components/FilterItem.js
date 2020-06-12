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
      <div className="FilterItem" onClick={this.onFilterClick}>
        {this.props.filter}
      </div>
    );
  }
}

export default connect(null, { deleteFilters, displayList })(FilterItem);
