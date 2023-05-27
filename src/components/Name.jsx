import React, { Component } from "react";
import { connect } from "react-redux";
import { LIKE_TOGGLE } from "../store/types";

class Name extends Component {
  render() {
    const { liked, character, onLikeToggle, id } = this.props;
    // console.log(this.props);
    return (
      <div>
        <h2>{character}</h2>
        <button
          className="likeNotLike"
          onClick={() => this.props.dispatch({ type: LIKE_TOGGLE, id })}
        >
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default connect()(Name);
