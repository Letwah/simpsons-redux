import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import Search from "./components/Search";
import { connect } from "react-redux";
import { NEW_API_DATA, SET_SEARCH_INPUT } from "./store/types";
//conditional rendering
class App extends Component {
  state = {};

  //lifecycle method
  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    //fixed the api data to have unique id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
    // this.setState({ simpsons: data }); //to remove
    this.props.dispatch({ type: NEW_API_DATA, payload: data });
  }

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    //invert if liked or not liked
    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    this.setState({ simpsons });
  };

  onSearchInput = (e) => {
    // this.setState({ searchInput: e.target.value });
    this.props.dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value });
  };

  onLikeDislikeInput = (e) => {
    // console.log("yo");
    this.setState({ likeDislikeInput: e.target.value });
  };

  render() {
    // console.log(this.props.simpsons);
    //destructuring
    const { searchInput, likeDislikeInput } = this.state;
    const { simpsons } = this.props;

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
        console.log(itemOne);
        if (itemOne.liked === true) return -1;
        if (!itemTwo.liked) return 1;
      });
    } else if (likeDislikeInput === "notLiked") {
      simpsonsCopy.sort((itemOne, itemTwo) => {
        if (itemOne.liked === true) return 1;
        if (!itemTwo.liked) return -1;
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
          <Search
            onSearchInput={this.onSearchInput}
            onLikeDislikeInput={this.onLikeDislikeInput}
          />
        </div>

        <Simpsons
          simpsons={simpsonsCopy}
          onDelete={this.onDelete}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    ); //must return HTML
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapStateToProps)(App);
