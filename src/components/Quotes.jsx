import { Component } from "react";
import { quotes } from "../assets/quotes.js";

export default class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      currentIndex: 0,
    };
  }

  nextFn = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === prevState.quotes.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  prevFn = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.quotes.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { quotes, currentIndex } = this.state;
    return (
      <div className="App">
        <p>{quotes[currentIndex].text}</p>
        <p>- {quotes[currentIndex].author}</p>
        <div className="buttons">
          <button onClick={this.prevFn}>Previous</button>
          <button onClick={this.nextFn}>Next</button>
        </div>
      </div>
    );
  }
}
