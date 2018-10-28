import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/logo2.png';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Row, Col } from 'reactstrap';
import { getSeasons } from '../actions/seriesActions';

import '../css/lst.css'

class Series extends Component {
	constructor(props) {
		super(props);
		this.props.getSeasons();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.action !== this.state.action) {
			this.setState({ series: nextProps.series });
		}
	}

	state = { 
		series: this.props.series ? this.props.series : null, 
		lastAction: this.props.action ? this.props.action : null 
	};

	render() {
		const seriesList = this.state.series.length ? (
			this.state.series.map(serie => {
				let styles = { backgroundImage: 'url(' + serie.portada + ')' }
				return (
					<Col xs="6" sm="6" md="4" lg="3" className="special-col" key={serie._id}>
						<div className="lst-img-wrapper" style={styles}>
							<Link to={'/' + serie._id}>
								<div className="lst-img-intern all-transition">
									<div className="text-center season-title">
										{serie.serie}
										<br />
										{serie.temporada}
									</div>
								</div>
							</Link>
						</div>
					</Col>
				)
			})
		) : (
				<div className="center">No se encontraron series disponibles</div>
			)

		return (
			<section className="container section2">
				<div className="text-center">
					<h1 className="align-middle custom-title dc-title">
						<img className="logo" src={Logo} alt="logo" />
						Listado
					</h1>
				</div>
				<Row className="lstSeries">
					{seriesList}
				</Row>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		series: state.series,
		action: state.action
	}
}

export default connect(mapStateToProps, { getSeasons })(Series)