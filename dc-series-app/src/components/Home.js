import React from 'react';
import Logo from '../images/logo2.png';

const Home = () => {
	return (
		<div className="App">
			<section id="home" className="home full-section">
				<a href="#section-1" className="scroll-down"><span><p>Scroll</p></span></a>
			</section>
			<section id="section-1" className="section">
				<div className="text-center">
					<h1 className="align-middle dc-title custom-title">
						<img className="logo" src={Logo} alt="logo"/>
						Descripción
					</h1>
				</div>
				<article id="article-1" className="container article-text">
					<p>
						El Arrowverso​ es un universo de ficción compartido creado por Greg Berlanti, Marc Guggenheim, Andrew Kreisberg y Geoff Johns que es ambientado por las series de televisión producidas por DC Entertainment y basadas en los personajes que aparecen en las publicaciones de DC Comics.
					</p>	
					<p>
					Este universo compartido incluye cinco series de televisión de acción en vivo, así como una serie web animada emitidas por la cadena The CW, y es establecido mediante crossovers entre puntos argumentales comunes, miembros del reparto y personajes. Arrow, basada en la historia de Flecha Verde fue la primera serie en estrenarse,​ dando paso a The Flash, un spin-off centrado en la historia de Barry Allen.3 Posteriormente, fue anunciado el lanzamiento de Vixen​ y Legends of Tomorrow, una serie derivada conjuntamente de Arrow y The Flash.
					</p>
				</article>
			</section>
		</div>
	)
}

export default Home