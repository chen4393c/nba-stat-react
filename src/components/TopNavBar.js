import React, { Component } from 'react';
import logo from '../assests/nba-logoman-word-white.svg';

class TopNavBar extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default TopNavBar;
