import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
						collapsed: true,
				};
				this.toggleNavbar = this.toggleNavbar.bind(this);
				this.logout = this.logout.bind(this);
		}

		logout() {
				localStorage.setItem('isAuth', 'false');
				localStorage.setItem('username', '');
				localStorage.setItem('pass', '');
		}

		toggleNavbar() {
				this.setState({
						collapsed: !this.state.collapsed,
				});
		}

		render() {
				return (
						<div>
								<Navbar color="faded" light>
										<NavbarBrand className="mr-auto">
												User: {localStorage.getItem('username') || ''}
										</NavbarBrand>
										<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
										<Collapse isOpen={!this.state.collapsed} navbar>
												<Nav navbar>
														<NavItem>
																<Link to="/">Main</Link>
														</NavItem>
														<NavItem>
																{!!localStorage.getItem('isAuth') &&
																	<NavLink href="/" onClick={this.logout}>Log out</NavLink>
																}
														</NavItem>
												</Nav>
										</Collapse>
								</Navbar>
						</div>
				);
		}
}
