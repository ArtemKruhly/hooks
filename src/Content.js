import { NavLink } from 'react-router-dom';
import React from 'react';

export default class Content extends React.Component {

		render() {
				return (
						<div style={{ marginBottom: '100px' }}>
								{!!localStorage.getItem('isAuth') || localStorage.getItem('isAuth') === 'true' ?
								<ul>
										<li>
												<NavLink to={'/video'} activeClassName='nav_active'>Video Player</NavLink>
										</li>
										<li>
												<NavLink to={'/audio'} activeClassName='nav_active'>Audio Player</NavLink>
										</li>
										<li>
												<NavLink to={'/location'} activeClassName='nav_active'>Geolocation</NavLink>
										</li>
										<li>
												<NavLink to={'/hook'} activeClassName='nav_active'>Hook</NavLink>
										</li>
								</ul>
										:
										null
								}
						</div>
				);
		}
}
