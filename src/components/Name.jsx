import React, { Component } from "react";

class Name extends Component {
  render() {
    const { liked, character, onLikeToggle, id } = this.props;
    // console.log(this.props);
    return (
      <div>
        <h2>{character}</h2>
        <button className="likeNotLike" onClick={() => onLikeToggle(id)}>
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default Name;
