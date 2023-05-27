import React, { Component } from "react";

//no need to destructure here - ony contains one line

class Quote extends Component {
  render() {
    return (
      <div>
        <p>{this.props.quote}</p>
      </div>
    );
  }
}

export default Quote;
