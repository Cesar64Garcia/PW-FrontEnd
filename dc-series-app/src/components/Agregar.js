import React, {Component} from 'react';
import Logo from '../images/logo2.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addSerie} from '../actions/seriesActions';
import {connect} from 'react-redux';
import { Row, Col } from 'reactstrap';

class AgregarSerie extends Component{
	state = {
		serie: 'The Flash',
		temporada: null,
		portada: 'https://i.pinimg.com/originals/15/57/f5/1557f5c8c1893cf08b37dbce6431c370.jpg',
		body: null,
		capitulos: null
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addSerie(this.state);
		this.props.history.push('./Series')
	}

	render(){
		let styles = {backgroundImage: 'url(' + this.state.portada + ')'}
		return (
			<section className="container section2">
        		<div className="text-center">
					<h1 className="align-middle dc-title custom-title"><img className="logo" src={Logo} alt="logo"/>Agregar</h1>
        		</div>
        		<div className="addSerie">
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col xs="12" sm="6" md="4" lg="3" className="special-col d-none d-sm-block">
								<div className="lst-img-wrapper" style={styles}></div>
							</Col>
							<Col xs="12" sm="6" md="8" lg="9" className="special-col">
								<FormGroup>
									<Label for="serie">Serie</Label>
									<select className="form-control" id="serie" onChange={this.handleOnChange} value={this.state.serie.value}>
										<option value='The Flash'>The Flash</option>
										<option value='Arrow'>Arrow</option>
										<option value='Supergirl'>Supergirl</option>
										<option value='Legends of Tomorrow'>Legends of Tomorrow</option>
										<option value='Batwoman'>Batwoman</option>
									</select>
								</FormGroup>
								<FormGroup>
									<Label for="temporada">Temporada</Label>
									<Input className="form-control" id="temporada" type="text" placeholder="Season XX" onChange={this.handleOnChange} required/>
								</FormGroup>
								<FormGroup>
									<Label for="capitulos">Capitulos</Label>
									<Input className="form-control" id="capitulos" type="number" placeholder="23" onChange={this.handleOnChange} required/>
								</FormGroup>
								<FormGroup>
									<Label for="portada">Portada</Label>
									<Input className="form-control" id="portada" type="text" placeholder="https://www.example.com/image.png" onChange={this.handleOnChange} value={this.state.portada} required/>
								</FormGroup>
								<FormGroup>
									<Label for="body">Descripción</Label>
									<textarea className="form-control" id="body" placeholder="..." rows="3" onChange={this.handleOnChange} required></textarea>
								</FormGroup>
								<FormGroup>
									<Button id="submit" type="submit" color="primary">Guardar</Button>
								</FormGroup>
							</Col>
						</Row>
					</Form>
        		</div>
    		</section>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		addSerie: (serie) => dispatch(addSerie(serie))
	}
}

export default connect(null,mapDispatchToProps)(AgregarSerie)