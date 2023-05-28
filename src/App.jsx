import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import Search from "./components/Search";
import { connect } from "react-redux";
import { NEW_API_DATA } from "./store/types";
//conditional rendering
class App extends Component {
  //lifecycle method
  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    //fixed the api data to have unique id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    this.props.dispatch({ type: NEW_API_DATA, payload: data });
  }

  render() {
    //destructuring

    const { simpsons, searchInput, likeDislikeInput } = this.props;

    //if nothing in state show "loading"
    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>You deleted everyone!</p>;

    //filter by search
    let simpsonsCopy = [...simpsons];
    if (searchInput) {
      simpsonsCopy = simpsonsCopy.filter((item) => {
        // console.log(item.character, searchInput);
        if (item.character.toLowerCase().includes(searchInput.toLowerCase())) {
          return true;
        }
      });
    }

    //sort by liked/not liked

    if (likeDislikeInput === "liked") {
      simpsonsCopy.sort((itemOne, itemTwo) => {
        if (itemOne.liked === true) return -1;
        if (!itemTwo.liked) return 1;
      });
    } else if (likeDislikeInput === "notLiked") {
      simpsonsCopy.sort((itemOne, itemTwo) => {
        if (itemTwo.liked === true) return -1;
        if (!itemOne.liked) return 1;
      });
    }

    // calculate the total
    let total = 0;
    simpsonsCopy.forEach((char) => {
      if (char.liked) total++;
    });

    return (
      <>
        <div className="title">
          <h1>Total No of Liked Characters #{total}</h1>
          <Search />
        </div>

        <Simpsons simpsons={simpsonsCopy} />
      </>
    ); //must return HTML
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
    searchInput: state.searchInput,
    likeDislikeInput: state.likeDislikeInput,
  };
}

export default connect(mapStateToProps)(App);
