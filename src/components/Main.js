import React, { Component } from 'react';
import Profile from "./Profile"
import nba from 'nba';
import {DataViewContainer} from "./DataViewContainer"

export default class Main extends Component {
  state = {
    playerId: nba.findPlayer('Stephen Curry').playerId,
    playerInfo: {},
  }

  componentDidMount() {
    // const curry = nba.findPlayer('Stephen Curry');
    // console.log(curry);
    nba.stats.playerInfo({ PlayerID: this.state.playerId })
      .then((info) => {
        const playerInfo = Object.assign(
          info.commonPlayerInfo[0], info.playerHeadlineStats[0]
        );
        console.log(playerInfo);
        this.setState({
          playerInfo: playerInfo,
        });
      });
  }

  render() {
    return (
      <div className="main">
        <Profile playerInfo={this.state.playerInfo}/>
        <DataViewContainer
          playerId={this.state.playerInfo.playerId}
        />
      </div>
    );
  }
}