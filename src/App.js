import React from 'react';
import './App.css';

const players = [
  {name: 'LDK', score: 30, id:1},
  {name: 'HONG', score: 40, id:2},
  {name: 'KIM', score: 50, id:3},
  {name: 'PARK', score: 60, id:4},
];

const Header = (props) =>{
  console.log(props);
  const {title, totalPlayers} = props;
  /*객체 해체 할당*/
  return(
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players : {props.totalPlayers}</span>
    </header>
  )
}

const Player = (props) => {
  return (
    <div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
			</span>
      <Counter score={props.score}/>
    </div>
  )
}


class Counter extends React.Component{
  //시간에 따라 변하는 데이터는 state라는 모델로 정의하였음
  //state를 변경하는 방법은 setState() 밖에 없다
  //setState() 는 merge(overwriteing)됨
  //setState() 는 비동기로 처리된다
  //이밴트 우측에는 함수 선언문이 와야 한다

  state = {
    score : 0
  }

  incrementScore(){
    this.setState(
      {score: this.state.score + 1}
    );
    console.log(this.state.score);
  }

  decrementScore(){
    if (this.state.score > 0) {
      this.setState(
        {score: this.state.score - 1}
      );
    }
    console.log(this.state.score);
  }

  //arrow function안에 쓰이는 this 는
  changeScore = (delta) => {
    this.setState(prevState => ({score: this.state.score + delta}));
    console.log('changeScore;;;' ,this.state.score);
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"
                onClick={ () => this.changeScore(-1)}
        > - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment"
                onClick={ () => this.changeScore(1)}
        > + </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map((player) =>
          <Player name={player.name}
                  key={player.id}
                  removePlayer={this.handleRemovePlayer}
                  id={player.id}
          />) }
      </div>
    );
  }

}

//index.js 와 app.js 로 분리 되었기때문에 export 가 되어야만 한다.
export default App;
