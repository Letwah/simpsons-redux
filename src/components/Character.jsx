import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  render() {
    //destructuring
    const { character, quote, image, id, characterDirection, liked } =
      this.props.item;
    const { onLikeToggle, onDelete } = this.props;

    if (characterDirection === "Right") {
      return (
        //this is like each "card"
        <div className="characterContainer">
          <Name
            character={character}
            onLikeToggle={onLikeToggle}
            id={id}
            liked={liked}
          />
          <Quote quote={quote} />
          <Image image={image} character={character} liked={liked} />
          <Delete onDelete={onDelete} id={id} />
        </div>
      );
    }

    return (
      //this is like each "card"
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Image image={image} character={character} liked={liked} />
        <Quote quote={quote} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  }
}

export default Character;
