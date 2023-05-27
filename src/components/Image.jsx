import React, { Component } from "react";
class Image extends Component {
  render() {
    const { image, character, liked } = this.props;
    // console.log(this.props);
    return (
      <>
        <div>
          <img
            className={liked ? "liked" : "notLiked"}
            src={image}
            alt={character}
          />
        </div>
      </>
    );
  }
}

export default Image;
