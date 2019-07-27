import React from 'react';

export class Stopwatch extends React.Component {
	state ={
		timer:0
		, isRunning : false
	}

	tickRef;

	render() {
		return (
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopwatch}>{this.state.isRunning ? 'STOP':'START'}</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		)
	}

	tick =() =>{
		if (this.state.isRunning){
			this.setState(prevState => ({
				timer: prevState.timer +1
			}));
		}
	}

	handleStopwatch = () => {
		this.setState(prevState => ({
			isRunning: !prevState.isRunning
		}))
	}

	handleReset = () => {
		this.setState({timer: 0})
	}

	//돔이 렌더링 된후 호출되는 라이프 사이클 메서드
	//네트워크 호출 3rd 라이브러리 로
	componentWillMount() {
			this.tickRef = setInterval(this.tick, 1000);
	}

	//dom 파괴 직전에 호출되는 사이프 사이클 메서드
	//리소스 해제
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}