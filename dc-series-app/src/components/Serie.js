import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {updateSerie} from '../actions/seriesActions';
import Logo from '../images/logo2.png';
import LogoArrow from '../images/arrow.png';
import LogoFlash from '../images/flash.png';
import LogoSuper from '../images/supergirl.png'
import LogoBatwoman from '../images/batwoman.png'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Serie extends Component{  
    state = {
        id: this.props.serie.id,
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
        this.props.updateSerie(this.state);
        
        confirmAlert({
			title: 'Actualización',
			message: 'La actualización se realizo correctamente',
			buttons: [
                {
                    label: 'Ok',
                },
                {
                    label: 'Regresar',
                    onClick: () => this.props.history.push('./Series')
                }
			]
		})
    }
    
    handleReturn = (e) => {
        this.props.history.push('./Series')
    }

    render() {
        let styles = {backgroundImage: 'url(' + this.state.portada + ')'}
        let imgLogo, classLogo
        
        switch (this.state.serie) {
            case 'Arrow':
                imgLogo = <img className="logo" src={LogoArrow} alt="logo"/>
                classLogo = 'arrow-title';
                break;
            case 'The Flash':
                imgLogo = <img className="logo" src={LogoFlash} alt="logo"/>
                classLogo = 'flash-title';
                break;
            case 'Supergirl':
                imgLogo = <img className="logo" src={LogoSuper} alt="logo"/>
                classLogo = 'supergirl-title';
                break;
            case 'Batwoman':
                imgLogo = <img className="logo" src={LogoBatwoman} alt="logo"/>
                classLogo = 'batwoman-title';
                break;
            default:
                imgLogo = <img className="logo" src={Logo} alt="logo"/>
                classLogo = 'dc-title';
                break;
        }

        return this.props.serie ? (
            <section className="container section2">
        		<div className="text-center">
					<h1 className={'align-middle custom-title ' + classLogo}>
                        {imgLogo}
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
                                    <Button id="return" type="" color="secondary" onClick={this.handleReturn}>Regresar</Button>
                                    <Button id="submit" className="secondary-buttom" type="submit" color="primary">Actualizar</Button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		updateSerie: (serie) => {
			dispatch(updateSerie(serie))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Serie)