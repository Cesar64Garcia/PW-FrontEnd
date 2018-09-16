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
					<h1 className="align-middle title custom-title">
						<img className="logo" src={Logo} alt="logo"/>
						Descripción
					</h1>
				</div>
				<article id="article-1" className="container article-text">
					<p>
						The Flash es una serie de televisión estadounidense desarrollada por Greg Berlanti, Andrew Kreisberg y Geoff Johns para la cadena The CW. El episodio piloto fue dirigido por David Nutter. La historia se basa en el 
						superhéroe de DC Comics, Flash, específicamente en Barry Allen, el segundo individuo en tomar dicha identidad. Se trata además de un spin-off de Arrow, serie de televisión basada en Flecha Verde, por lo cual comparten el
						mismo universo de ficción.​ Fue estrenada el 7 de octubre de 2014.​ El 21 de octubre de 2014, The CW ordenó una temporada completa de veintitrés episodios.
					</p>	
					<p>
						El 2 de abril de 2018, se anunció la renovación de la serie para una quinta temporada,​ que se estrenará el 9 de 
						octubre de 2018.
					</p>
				</article>
			</section>
		</div>
	)
}

export default Home