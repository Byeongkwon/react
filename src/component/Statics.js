import React from 'react';

export const Statics = (props) => {
	const totalPlayers = props.players.length;

	let tS = 0;

	props.players.forEach(player =>{
		tS += player.score;
	})

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players : </td>
				<td>{tS}</td>
			</tr>
			<tr>
				<td>Total Points : </td>
				<td>{totalPlayers}</td>
			</tr>
			</tbody>
		</table>
	);
}