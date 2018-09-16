import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from '../images/logo2.png';

class Serie extends Component{  
    state = {
        serie: this.props.serie.serie,
		temporada: this.props.serie.temporada,
		portada: this.props.serie.portada,
		body: this.props.serie.body,
		capitulos: this.props.serie.capitulos
    }

	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})

		console.log(this.state)
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state)
		this.props.addSerie(this.state);
		this.props.history.push('./Series')
	}

    render() {
		let styles = {backgroundImage: 'url(' + this.state.portada + ')'}

        return this.props.serie ? (
            <section className="container section2">
        		<div className="text-center">
					<h1 className="align-middle title custom-title">
                        <img className="logo" src={Logo} alt="logo"/>
                        {this.state.serie}
                    </h1>
        		</div>
        		<div className="addSerie">
					<Form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="special-col col-lg-3 col-md-4 col-sm-6 col-12">
								<div className="lst-img-wrapper" style={styles}></div>
							</div>
                            <div className="special-col col-lg-9 col-md-8 col-sm-6 col-12">
                                <FormGroup>
                                    <Label for="serie">Serie</Label>
                                    <select className="form-control" id="serie" onChange={this.handleOnChange} value={this.state.serie}>
                                        <option value='The Flash'>The Flash</option>
                                        <option value='Arrow'>Arrow</option>
                                        <option value='Supergirl'>Supergirl</option>
                                        <option value='Legends of Tomorrow'>Legends of Tomorrow</option>
                                        <option value='Batwoman'>Batwoman</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="temporada">Temporada</Label>
                                    <Input className="form-control" id="temporada" type="text" placeholder="Season XX" onChange={this.handleOnChange} value={this.state.temporada}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="capitulos">Temporada</Label>
                                    <Input className="form-control" id="capitulos" type="number" placeholder="23" onChange={this.handleOnChange} value={this.state.capitulos}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="portada">Portada</Label>
                                    <Input className="form-control" id="portada" type="text" placeholder="https://www.example.com/image.png" onChange={this.handleOnChange} value={this.state.portada}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="body">Descripción</Label>
                                    <textarea  className="form-control" id="body" placeholder="..." rows="3" onChange={this.handleOnChange} value={this.state.body}></textarea>
                                </FormGroup>
                                <FormGroup className="text-left">
                                    <Button id="submit" type="submit" color="primary">Actualizar</Button>
                                </FormGroup>
                            </div>
						</div>
					</Form>
        		</div>
    		</section>
        ) : (
            <div className="container">
                No se encontro la serie buscada...
            </div>
        )
    } 
}
    
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.serie_id;
    return {
        serie: state.series.find(serie => serie.id === id)
    }
}

export default connect(mapStateToProps)(Serie)