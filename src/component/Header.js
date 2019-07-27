import React from 'react';
import {Statics} from "./Statics";
import {Stopwatch} from "./Stopwatch";

export const Header = ({title, players}) =>{
	/*객체 해체 할당      ^^^^^^^^^^^^^^*/
	return (
		<header className="header">
			<Statics players={players}/>
			<h1 className="h1">{title}</h1>
			<Stopwatch></Stopwatch>
		</header>
	)
}
