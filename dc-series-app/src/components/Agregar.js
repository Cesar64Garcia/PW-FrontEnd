import React, {Component} from 'react';
import Logo from '../images/logo2.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addSerie} from '../actions/seriesActions';
import {connect} from 'react-redux';

class AgregarSerie extends Component{
	state = {
		serie: 'The Flash',
		temporada: null,
		portada: null,
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
		console.log(this.state)
		this.props.addSerie(this.state);
		this.props.history.push('./Series')
	}

	render(){
		return (
			<section className="container section2">
        		<div className="text-center">
					<h1 className="align-middle title custom-title"><img className="logo" src={Logo} alt="logo"/>Agregar</h1>
        		</div>
        		<div className="addSerie">
					<Form onSubmit={this.handleSubmit}>
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
							<Input className="form-control" id="temporada" type="text" placeholder="Season XX" onChange={this.handleOnChange}/>
						</FormGroup>
						<FormGroup>
							<Label for="capitulos">Temporada</Label>
							<Input className="form-control" id="capitulos" type="number" placeholder="23" onChange={this.handleOnChange}/>
						</FormGroup>
						<FormGroup>
							<Label for="portada">Portada</Label>
							<Input className="form-control" id="portada" type="text" placeholder="https://www.example.com/image.png" onChange={this.handleOnChange}/>
						</FormGroup>
						<FormGroup>
							<Label for="body">Descripción</Label>
							<textarea  className="form-control" id="body" placeholder="..." rows="3" onChange={this.handleOnChange}></textarea>
						</FormGroup>
						<FormGroup>
							<Button id="submit" type="submit" color="primary">Guardar</Button>
						</FormGroup>
					</Form>
        		</div>
    		</section>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		addSerie: (serie) => {
			dispatch(addSerie(serie))
		}
	}
}

export default connect(null,mapDispatchToProps)(AgregarSerie)