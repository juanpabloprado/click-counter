import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {clicks: 0}
  }
  
  handleClick() {
    this.setState((prevState) => ({
         clicks: prevState.clicks + 1
      }));
  }

  render() {
    return <button onClick={() => this.handleClick()}>Clicked {this.state.clicks} Times</button>
  }
}

export default App;
