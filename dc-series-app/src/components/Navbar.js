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
		let classNav = 'all-transition custom-nav' + (this.props.location.pathname === '/' ? '' : '-dark')
		return(
			<Navbar id="navbar" className={classNav} fixed="top" dark expand="md">
				<NavbarToggler onClick={this.toggle} />
				<NavLink to="/" className="navbar-brand">
					<img className="logo" src={Logo} alt="logo"/>
					<span className="align-middle cool-link">DC Series</span>
				</NavLink>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink to="/Series" className="nav-link cool-link">Series</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/Agregar" className="nav-link cool-link">Agregar</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}

export default withRouter(CustomNavbar)