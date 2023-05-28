import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    //destructuring
    const { simpsons } = this.props;

    return (
      //is now 'props' instead of 'state' because we passing data into a child
      <>
        {simpsons.map((item) => {
          return <Character item={item} key={item.id} />;
        })}
      </>
    );
  }
}

export default Simpsons;
