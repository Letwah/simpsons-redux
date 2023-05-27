import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_TOGGLE } from "../store/types";

class Delete extends Component {
  render() {
    const { onDelete, id } = this.props;
    return (
      <div>
        <button
          className="bin"
          onClick={() => this.props.dispatch({ type: DELETE_TOGGLE, id })}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Delete);
