import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
				localStorage.clear();
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
										<NavbarBrand href="/" className="mr-auto">APP</NavbarBrand>
										<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
										<Collapse isOpen={!this.state.collapsed} navbar>
												<Nav navbar>
														<NavItem>
																<NavLink to="/">Main</NavLink>
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
