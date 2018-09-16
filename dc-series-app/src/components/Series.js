import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DeleteImg from '../images/delete.png';
import {connect} from 'react-redux';
import Logo from '../images/logo2.png';
import '../css/lst.css'

class Series extends Component{
	render() {
		const {series} = this.props ;
		const seriesList = series.length ? (
			series.map(serie => {
				let styles = {backgroundImage: 'url(' + serie.poster + ')'}
				return (
					<div className="special-col col-lg-3 col-md-4 col-sm-6 col6" key={serie.id}>
						<Link to={'/' + serie.id}>
							<div className="lst-img-wrapper" style={styles}>
								<div className="lst-img-intern all-transition">
									<div className="text-right">
										<img src={DeleteImg} alt="delete-btn" className="delete-btn all-transition"/>
									</div>
									<div className="text-center season-title">{'Season ' + serie.season}</div>
								</div>
							</div>
						</Link>
					</div>
				)
			})
		) : (
			<div className="center">No se encontraron series disponibles</div>
		)

		return (
			<section className="container section2">
				<div className="text-center">
					<h1 className="align-middle title custom-title">
						<img className="logo" src={Logo} alt="logo"/>
						Listado
					</h1>
				</div>
				<div className="lstSeries row">
					{seriesList}
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        series: state.series
    }
}

export default connect(mapStateToProps)(Series)