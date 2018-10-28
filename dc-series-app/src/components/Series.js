import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteSerie} from '../actions/seriesActions';
import Logo from '../images/logo2.png';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Row, Col } from 'reactstrap';

import '../css/lst.css'

class Series extends Component{
	handleDelete = (id) => {
		confirmAlert({
			title: 'Alerta',
			message: '¿Esta seguro de eliminar?',
			buttons: [
			  {
				label: 'Si',
				onClick: () => this.props.deleteSerie(id)
			  },
			  {
				label: 'No'
			  }
			]
		})
		
        this.props.history.push('./Series')
    }
	
	render() {
		const {series} = this.props ;

		const seriesList = series.length ? (
			series.map(serie => {
				let styles = {backgroundImage: 'url(' + serie.portada + ')'}
				return (
					<Col xs="6" sm="6" md="4" lg="3" className="special-col" key={serie._id}>
						<div className="lst-img-wrapper" style={styles}>
							<Link to={'/' + serie._id}>
								<div className="lst-img-intern all-transition">
										<div className="text-center season-title">
											{serie.serie}
											<br/>
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
						<img className="logo" src={Logo} alt="logo"/>
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
        series: state.series
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSerie: (id) => {
            dispatch(deleteSerie(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Series)