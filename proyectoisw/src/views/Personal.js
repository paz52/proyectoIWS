import React, { Component } from 'react';
import './Personal.css';
import fondo from './fondopersonal.jpg';



export default class Personal extends Component {
	render() {
		return (
			<section className="material">
				<div className="jumbotron-fluid paral " style={{ backgroundImage: 'url(' + fondo + ')' }} >
					<div className="overlay ">
						<div className="container">
							<h1 className="display-3"><i className="fas fa-user-md icono"></i>  Gestión de<strong>  Personal</strong></h1>
						</div>
					</div>
				</div>
				<div className="tab-content " style={{ marginTop: "1px" }}>
					<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						<div className="container">
							<div className="row">
								<div className="col-lg-2 ">
									<div className="nav flex-column nav-pills nav-material2 stiky-list" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										<a className="link-material nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Ver todos los pacientes</a>
										<a className="link-material nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Ingresar nuevo paciente</a>
										<a className="link-material nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Buscar datos de un paciente</a>
										<a className="link-material nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Modificar datos de un paciente</a>
									</div>
								</div>
								<div className="col-lg-10" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
									<div className="tab-content" id="v-pills-tabContent">
										<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
											
										</div>
										<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
											
										</div>
										<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
											
										</div>
										<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		)
	}

}