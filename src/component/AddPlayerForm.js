import React from 'react';

export class AddPlayerForm extends React.Component {

	state = {
		value:''
	}

	handleValueChange = (e) => {
		//console.log(e);
		this.setState({value: e.target.value})
	}

	handleSubmit = (e) => {
		//기본 이벤트 제거
		//submit 하게되면 화면이 reflash 되기때문에
		e.preventDefault();

		const playerInput = document.getElementById("player");

		console.log("playerInput>>>>>>" ,playerInput.validity.valid);
		console.log("form>>>>>" ,document.getElementById("form").checkValidity());

		if(!playerInput.validity.valid){
			return;
		}

		this.props.addPlayer(this.state.value);
	}

	//validate check


	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit} noValidate id="form">
				<input className="input" type="text" placeholder="enter a player`s name"
				value={this.state.value} onChange={this.handleValueChange} required id="player"></input>
				<input className="input" type="submit" value="AddPlayer"  ></input>
			</form>
		);
	}
}