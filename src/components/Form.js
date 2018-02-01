import React from 'react';

import Aboutme from './Aboutme';
import Data from './Data';
import Experience from './Experience';
import Education from './Education';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';
import expandbuttonmedium from '../images/expandbuttonmedium.png';

class Form extends React.Component {
	render() {
		return (

			<section>
				<button id="button-down" type="button" name="button-down"><a href="index.html#empty-container"><img src={expandbuttonmedium} alt="rellena-los-campos"/></a></button>
				<div id="empty-container"></div>
				<div className="main-web-sections">
					<section className="form-section" id="ventana1">
						<Data />
						<Aboutme />
						<Experience />
						<Education />
						<section  className="form-section-container">
							<div className="title-container">
								<h2 className="title-form text-form-button">Habilidades</h2>
								<button id="openButtonSkill" className="open-section-button shown" type="button" name="skills-button" onclick="editar('content-skills')" value="openButton">
									<img src={expandbutton} alt="addButton"/>
								</button>
								<button id="closeButtonSkill" className="close-section-button hidden" type="button" name="content-skills-button" onclick="ocultar('content-skills')" value="closeButton">
									<img src={expandarrow} alt="minusbuttom"/>
								</button>
							</div>
							<form action="index.html" method="post">
								<div id="content-skills" className="boxes-container">
									<div className="input-skill">
										<input className="inputs skill" type="text" name="skill1" value="" placeholder="Escribe una habilidad" id="skill1"></input>
										<input className="inputs skill-percent" type="text" name="percentage1" value="" placeholder="Escribe un porcentaje" id="percentage1"></input>
									</div>
									<div className="input-skill">
										<input className="inputs skill" type="text" name="skill2" value="" placeholder="Escribe una habilidad" id="skill2"></input>
										<input className="inputs skill-percent"  type="text" name="percentage2" value="" placeholder="Escribe un porcentaje" id="percentage2"></input>
									</div>
									<div className="input-skill">
										<input className="inputs skill"  type="text" name="skill3" value="" placeholder="Escribe una habilidad" id="skill3"></input>
										<input className="inputs skill-percent"  type="text" name="percentage3" value="" placeholder="Escribe un porcentaje" id="percentage3"></input>
									</div>
									<div className="input-skill">
										<input className="inputs skill" type="text" name="skill4" value="" placeholder="Escribe una habilidad" id="skill4"></input>
										<input className="inputs skill-percent" type="text" name="percentage4" value="" placeholder="Escribe un porcentaje" id="percentage4"></input>
									</div>
								</div>
							</form>
						</section>
						<section id="languages-form-container">
							<div className="title-container">
								<h2 className="title-form text-form-button">Idiomas</h2>
								<button id="openButtonlanguages" className="open-section-button shown" type="button" name="languageButton" onclick="editar('languages-form')" value="openButton"><img src={expandbutton} alt="addButton"/></button>
								<button id="closeButtonlanguages" className="close-section-button hidden" type="button" name="job-box-button" onclick="ocultar('languages-form')" value="closeButton">
									<img src={expandarrow} alt="minusbuttom"/></button>
								</div>
								<form id="languages-form" action="index.html" method="post">
									<div className="input-lang">
										<input className="language inputs" type="text" name="language1" value="" placeholder="Escribe un idioma"></input>
										<input className="percentage inputs" type="text" name="percentage1" value="" placeholder="Escribe su porcentaje"></input>
									</div>
									<div className="input-lang">
										<input className="language inputs" type="text" name="language2" value="" placeholder="Escribe un idioma"></input>
										<input className="percentage inputs" type="text" name="percentage2" value="" placeholder="Escribe su porcentaje"></input>
									</div>
									<div className="input-lang">
										<input className="language inputs" type="text" name="language3" value="" placeholder="Escribe un idioma"></input>
										<input className="percentage inputs" type="text" name="percentage3" value="" placeholder="Escribe su porcentaje"></input>
									</div>
								</form>
							</section>
							<section id="hobbies-form-container">
								<div className="title-container">
									<h2 className="title-form text-form-button">Hobbies</h2>
									<button id="openButtonHobbies" className="addLanguageButton open-section-button shown" type="button" name="languageButton" onclick="editar('hobbies-form')" value="openButton"><img src={expandbutton} alt="addButton"/></button>
									<button id="closeButtonHobbies" className="close-section-button hidden" type="button" name="hobbiesForm-button" onclick="ocultar('hobbies-form')" value="closeButton">
										<img src={expandarrow} alt="minusbuttom"/>
									</button>
								</div>
								<form id="hobbies-form" action="index.html" method="post">
									<div className="check-box-hobbies">
										<label for="hobbie1">Leer</label>
										<input id ="hobbie1" type="checkbox" name="read" value="hobbies" onchange="showHobbiesPreview('read')"></input>
									</div>
									<div className="check-box-hobbies">
										<label for="hobbie2">Viajar</label>
										<input id ="hobbie2" type="checkbox" name="travel" value="hobbies" onchange="showHobbiesPreview('travel')"></input>
									</div>
									<div className="check-box-hobbies">
										<label for="hobbie3">Videojuegos</label>
										<input id ="hobbie3" type="checkbox" name="game" value="hobbies" onchange="showHobbiesPreview('game')"></input>
									</div>
									<div className="check-box-hobbies">
										<label for="hobbie4">Deportes</label>
										<input id ="hobbie4" type="checkbox" name="sports" value="hobbies" onchange="showHobbiesPreview('sports')"></input>
									</div>
									<div className="check-box-hobbies">
										<label for="hobbie5">Cine</label>
										<input id ="hobbie5" type="checkbox" name="movies" value="hobbies" onchange="showHobbiesPreview('cinema')"></input>
									</div>
									<div className="check-box-hobbies">
										<label for="hobbie6">Música</label>
										<input id ="hobbie6" type="checkbox" name="music" value="hobbies" onchange="showHobbiesPreview('music')"></input>
									</div>
								</form>
							</section>
							<section>
								<form className="form-section-container" action="index.html" method="post">
									<div className="title-container">
										<h2 className="title-form text-form-button">Redes Sociales</h2>
										<button id="openButtonNet" className="open-section-button shown" type="button" name="networksButton" onclick="showNetsocial()" value="openButton">
											<img src={expandbutton} alt="addButton"/></button>
											<button id="closeButtonNet" className="close-section-button hidden" type="button" name="minredes-button" onclick="ocultar('minredes')" value="closeButton">
												<img src={expandarrow} alt="minusbuttom"/>
											</button>
										</div>
										<div className="boxes-container net-social-hidden" id="minredes">
											<div className="nets">
												<label className="socialLabel" for="linkedin">Linkedin</label>
												<input className="users inputs" id="linkedin" type="text" name="net1" placeholder=" Rellena con tu usuario"></input>
											</div>
											<div className="nets">
												<label className="socialLabel" for="facebook">Facebook</label>
												<input className="users inputs" id="facebook" type="text" name="net2" placeholder=" Rellena con tu usuario"></input>
											</div>
											<div className="nets">
												<label className="socialLabel" for="github">Github</label>
												<input className="users inputs" id="github" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
											</div>
											<div className="nets">
												<label className="socialLabel" for="twitter">Twitter</label>
												<input className="users inputs" id="twitter" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
											</div>
											<div className="nets">
												<label className="socialLabel" for="instagram">Instagram</label>
												<input className="users inputs" id="instagram" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
											</div>
										</div>
									</form>
								</section>
								<section>
									<form className="form-section-container" action="index.html" method="post">
										<div className="title-container">
											<h2 className="title-form text-form-button">Portfolio</h2>
											<button  id="openButtonQr" className="open-section-button shown" type="button" name="networksButton" onclick="editar('showNetsocial')" value="openButton">
												<img src={expandbutton} alt="addButton"/>
											</button>
											<button  id="closeButtonQr" className="close-section-button hidden" type="button" name="showNetsocial-button" onclick="ocultar('showNetsocial')" value="closeButton">
												<img src={expandarrow} alt="minusbuttom"/>
											</button>
										</div>
										<div className="boxes-container net-social-hidden" id="showNetsocial">
											<div className="nets">
												<input className="inputPortfolio" id="inputQr" type="text" name="inputQr" placeholder=" Contenido para generar QR"></input>
												<button type="button" id="button-generateqr" value="Generar" className="buttons-save-general"></button>
											</div>
										</div>
									</form>
								</section>
							</section>
						</div>
					</section>

		)
	}
}

export default Form ;
