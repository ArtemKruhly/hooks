import React from 'react';
import './testStyle.css';

export default class Test extends React.Component {

		render() {
				return (
					<div className="main_test">
							<audio src={'/12.mp3'} autoPlay loop />
							<div id='stars' />
							<div id='stars2' />
							<div id='stars3' />
							<div id='title'>
							<span>
								GRAVITY
							</span>
									<br />
							<span>
								PURE CSS
							</span>
							</div>
					</div>
				)
		}

}