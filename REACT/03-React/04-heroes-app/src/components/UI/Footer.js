import React from 'react';

export const Footer = () => {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			<section className="pt-2">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fas fa-gem me-3"></i>Heroes App
							</h6>
							<p>Proyecto de prueba que sigo para aprender React</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
							<p>
								<i className="fas fa-user me-3"></i>lucnova
							</p>
							<p>
								<i className="fas fa-envelope me-3"></i>
								alanugb@gmail.com
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="text-center p-4">
				lucnova
				<a className="text-reset fw-bold" href="https://github.com/lucnova">
					GitHub
				</a>
			</div>
		</footer>
	);
};
