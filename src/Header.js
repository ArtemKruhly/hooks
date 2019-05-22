import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {
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
      <div className="nav_bar" style={document.location.pathname === '/test' ? { display: 'none' } : {}}>
				<Navbar color="faded" light>
					<NavbarBrand className="mr-auto">
						User: {localStorage.getItem('username') || ''}
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar className="menu_nav">
								<NavItem>
										<Link to="/" className="menu_nav">Main</Link>
								</NavItem>
								<NavItem>
								{!!localStorage.getItem('isAuth') && localStorage.getItem('isAuth') === 'true' &&
									<NavLink href="/" className="menu_nav" onClick={this.logout}>Log out</NavLink>
								}
								</NavItem>
						</Nav>
				</Collapse>
				</Navbar>
				</div>
    );
  }
}

export default withRouter(Header);
