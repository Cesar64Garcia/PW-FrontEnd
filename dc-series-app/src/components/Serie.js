import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getSeason, updateSerie, deleteSerie} from '../actions/seriesActions';
import Logo from '../images/logo2.png';
import LogoArrow from '../images/arrow.png';
import LogoFlash from '../images/flash.png';
import LogoSuper from '../images/supergirl.png'
import LogoBatwoman from '../images/batwoman.png'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Serie extends Component{  
    constructor(props) {
        super(props);
        this.props.getSeason(props.match.params.serie_id);
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.serie !== this.state) {
            this.setState(nextProps.serie);
        }
    }

    state = this.props.serie;

	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
        this.props.updateSerie(this.state);
        this.props.history.push('./Series')
    }
    
    handleReturn = (e) => {
        this.props.history.push('./Series')
    }

    handleDelete = (e) => {
        confirmAlert({
			title: 'Alerta',
			message: '¿Esta seguro de eliminar?',
            buttons: [
                {
                    label: 'No',
                    color: 'grey'
                },
                {
                    label: 'Si',
                    onClick: () => {
                        this.props.deleteSerie(this.props.serie._id)
                        this.props.history.push('./Series')
                    }
                }
			]
        })
    }

    render() {
        let styles,imgLogo, classLogo

        const serie = this.state;

        if (serie){
            styles = {backgroundImage: 'url(' + serie.portada + ')'}
            
            switch (serie.serie) {
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
        }
        
        return serie ? (
            <section className="container section2">
        		<div className="text-center">
					<h1 className={'align-middle custom-title ' + classLogo}>
                        {imgLogo}
                        {serie.serie}
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
                                    <select className="form-control" id="serie" onChange={this.handleOnChange} value={serie.serie}>
                                        <option value='The Flash'>The Flash</option>
                                        <option value='Arrow'>Arrow</option>
                                        <option value='Supergirl'>Supergirl</option>
                                        <option value='Legends of Tomorrow'>Legends of Tomorrow</option>
                                        <option value='Batwoman'>Batwoman</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="temporada">Temporada</Label>
                                    <Input className="form-control" id="temporada" type="text" placeholder="Season XX" onChange={this.handleOnChange} value={serie.temporada} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="capitulos">Capitulos</Label>
                                    <Input className="form-control" id="capitulos" type="number" placeholder="23" onChange={this.handleOnChange} value={serie.capitulos} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="portada">Portada</Label>
                                    <Input className="form-control" id="portada" type="text" placeholder="https://www.example.com/image.png" onChange={this.handleOnChange} value={serie.portada} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="body">Descripción</Label>
                                    <textarea className="form-control" id="body" placeholder="..." rows="3" onChange={this.handleOnChange} value={serie.body} required></textarea>
                                </FormGroup>
                                <FormGroup className="text-left">
                                    <Button id="return" color="secondary" onClick={this.handleReturn}>Regresar</Button>
                                    <Button id="delete" className="secondary-buttom" color="danger" onClick={this.handleDelete}>Eliminar</Button>
                                    <Button id="submit" className="secondary-buttom" type="submit" color="primary">Actualizar</Button>
                                </FormGroup>
                            </div>
						</div>
					</Form>
        		</div>
    		</section>
        ) : (
            <div className="container section2">
                No se encontro la serie buscada...
            </div>
        )
    } 
}
    
const mapStateToProps = (state) => {
    return {
        serie: state.actualSerie
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSerie: (serie) => {
			dispatch(updateSerie(serie))
        },
        deleteSerie: (id) => {
            dispatch(deleteSerie(id))
        },
        getSeason: (id) => {
            dispatch(getSeason(id))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Serie)