import React from 'react';
import {withRouter, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem} from 'reactstrap';

class CustomNavbar extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
	render(){
		return(
			<Navbar id="navbar" className="all-transition custom-nav-dark custom-nav-dark" fixed="top" dark expand="md">
				<NavLink to="/" className="navbar-brand">
					<img className="logo" src={Logo} alt="logo"/>
					<span className="align-middle">DC Series</span>
				</NavLink>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink to="/" className="nav-link cool-link">Inicio</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/series" className="nav-link cool-link">Series</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/agregar" className="nav-link cool-link">Agregar</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}

export default withRouter(CustomNavbar)