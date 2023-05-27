import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    //destructuring
    const {
      simpsons,
      onDelete,
      onLikeToggle,
      onSearchInput,
      onLikeDislikeInput,
    } = this.props;

    return (
      //is now 'props' instead of 'state' because we passing data into a child
      <>
        {simpsons.map((item, index) => {
          return (
            <Character
              item={item}
              key={item.id}
              onDelete={onDelete}
              onLikeToggle={onLikeToggle}
              onLikeDislikeInput={onLikeDislikeInput}
            />
          );
        })}
      </>
    );
  }
}

export default Simpsons;
