import React, { Component } from 'react';
import './App.css';
import Clicker from './Clicker';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {clicks: 0}
  }
  
  handleClick = () => {
    this.setState((prevState) => ({
         clicks: prevState.clicks + 1
      }));
  }

  render() {
    return <div>
      <button onClick={this.handleClick}>Clicked {this.state.clicks} Times</button>
      <Clicker handleClick={(letter) => {console.log(`${letter} clicked`)}} />
    </div>
  }
}

export default App;
