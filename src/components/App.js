import React, { Component } from 'react';
import TopNavBar from "./TopNavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
