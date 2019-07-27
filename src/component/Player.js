import React from 'react';
import {Counter} from "./Counter";

// export const Player = ({name, score, removePlayer, id, changeScore}) => {
//
// 	return (
// 		<div className="player">
// 			<span className="player-name">
// 				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
// 				{name}
// 			</span>
// 			<Counter id={id} score={score} changeScore={changeScore} />
// 		</div>
// 	);
// }

export class Player extends React.PureComponent {
	render() {
		const {name, score, removePlayer, id, changeScore} = this.props;
		console.log(this.props.name, ' rendered');

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
					{name}
				</span>
				<Counter id={id} score={score} changeScore={changeScore} />
			</div>
		);
	}
}