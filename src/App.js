import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Player} from "./component/Player";
import {AddPlayerForm} from "./component/AddPlayerForm";

class App extends React.Component {
  // Listing UP: 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부모로 올리기
  // 로직을 구현하기 위해서 Lifting up이 필요
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  maxId = 4;

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map((player) =>
          <Player name={player.name}
                  key={player.id}
                  score={player.score}
                  removePlayer={this.handleRemovePlayer}
                  id={player.id}
                  changeScore={this.handelChangeScore}
          />) }
          <AddPlayerForm addPlayer = {this.handleAddPlayer}/>
      </div>
    );
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  }

  handelChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(player =>{
          if (player.id === id){
            player.score += delta
          }
        }
      )
      return{
         players:[...prevState.players]
      }
    })
  }

  handleAddPlayer = (name) => {
    console.log(name);
    const player = {name: name, score: 0, id: ++this.maxId};

    this.setState(prevState => {
      prevState.players.push(player);
      return {players: prevState.players};
    })
  }
}

//index.js 와 app.js 로 분리 되었기때문에 export 가 되어야만 한다.
export default App;
