import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    const { onSearchInput, onLikeDislikeInput } = this.props;
    // console.log(typeof onLikeDislikeInput);

    return (
      <>
        <input
          onInput={onSearchInput}
          type="text"
          placeholder="Search Characters ..."
        />
        {/* {" "} */}

        <select onChange={onLikeDislikeInput}>
          <option value="">Reset</option>
          <option value="liked">Liked</option>
          <option value="notLiked">Not Liked</option>
        </select>
      </>
    );
  }
}

export default Search;
