import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SEARCH_INPUT, LIKE_DISLIKE_OPTION } from "../store/types";

class Search extends Component {
  state = {};
  render() {
    const { onSearchInput, onLikeDislikeInput } = this.props;
    // console.log(typeof onLikeDislikeInput);

    return (
      <>
        <input
          onInput={() =>
            this.props.dispatch({
              type: SET_SEARCH_INPUT,
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Search Characters ..."
        />
        {/* {" "} */}

        <select
          onChange={() =>
            this.props.dispatch({
              type: LIKE_DISLIKE_OPTION,
              payload: e.target.value,
            })
          }
        >
          <option value="">Reset</option>
          <option value="liked">Liked</option>
          <option value="notLiked">Not Liked</option>
        </select>
      </>
    );
  }
}

export default connect()(Search);
