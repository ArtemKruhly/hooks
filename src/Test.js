import React from 'react';
import './testStyle.css';
import { Redirect } from 'react-router-dom';

export default class Test extends React.Component {
		constructor(props) {
				super(props);
				this.redirect = this.redirect.bind(this);
		}

		redirect() {
				if (localStorage.getItem('isAuth') === 'false') {
						return <Redirect to={'/'} />;
				}
		}

		render() {
				return (
					<div className="main_test">
							{this.redirect()}
							{/*<audio src={'/12.mp3'} autoPlay loop />*/}
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
				);
		}
}
