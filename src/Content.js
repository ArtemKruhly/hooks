import { NavLink } from 'react-router-dom';
import React from 'react';

export default class Content extends React.Component {

		render() {
				return (
						<div className="marg" style={this.props.history.location.pathname === '/space' ? { display: 'none' } : {}}>
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
										<li>
												<NavLink to={'/parser'} activeClassName='nav_active'>Fetch</NavLink>
										</li>
										<li>
												<NavLink to={'/space'}>Space</NavLink>
										</li>
										<li>
												<NavLink to={'/admin'} activeClassName='nav_active'>Admin</NavLink>
										</li>
								</ul>
										:
										null
								}
						</div>
				);
		}
}
