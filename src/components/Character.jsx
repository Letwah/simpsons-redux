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

    if (characterDirection === "Right") {
      return (
        //this is like each "card"
        <div className="characterContainer">
          <Name character={character} id={id} liked={liked} />
          <Quote quote={quote} />
          <Image image={image} character={character} liked={liked} />
          <Delete id={id} />
        </div>
      );
    }

    return (
      //this is like each "card"
      <div className="characterContainer">
        <Name character={character} id={id} liked={liked} />
        <Image image={image} character={character} liked={liked} />
        <Quote quote={quote} />
        <Delete id={id} />
      </div>
    );
  }
}

export default Character;
