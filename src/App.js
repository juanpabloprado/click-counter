import React, { Component } from 'react';
import './App.css';
import Clicker from './Clicker';
import ClickyButtons from './ClickyButtons';
import ConditionalDisplay from './ConditionalDisplay';
import Sum from './Sum';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { clicks: 0, showSum: true }

    setInterval(()=> {
      this.setState((prevState) => ({
        showSum: !prevState.showSum
      }));
    }, 2000);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return <div>
      <button onClick={this.handleClick}>Clicked {this.state.clicks} Times</button>
      <Clicker handleClick={(letter) => { console.log(`${letter} clicked`) }} />
      <ClickyButtons numberOfButtons={99} onSelection={console.log} />
      <ConditionalDisplay isVisible={this.state.showSum}>
        <h1>A <span>Sum</span></h1>
        <Sum a={4} b={2} />
      </ConditionalDisplay>
    </div>
  }

}

export default App;
