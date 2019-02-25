import React, { Component } from 'react';
import './App.css';
import Clicker from './Clicker';
import ClickyButtons from './ClickyButtons';

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
      <ClickyButtons numberOfButtons={99} onSelection={console.log} />
    </div>
  }
}

export default App;
