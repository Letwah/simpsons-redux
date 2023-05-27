import React, { Component } from "react";
class Delete extends Component {
  render() {
    const { onDelete, id } = this.props;
    return (
      <div>
        <button onClick={() => onDelete(id)} className="bin">
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;
