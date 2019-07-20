import React from 'react';
import {Statics} from "./Statics";

export const Header = ({title, players}) =>{

	console.log("totalP:::::::", players)

	/*객체 해체 할당*/
	return (
		<header className="header">
			<Statics players={players}/>
			<h1 className="h1">{title}</h1>
		</header>
	)
}
