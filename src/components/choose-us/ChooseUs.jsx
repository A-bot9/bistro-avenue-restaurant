import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pastaImg from '../../assets/images/pasta.png';
import './choose-us.css';

const ChooseUs = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg="6">
						<img src={pastaImg} alt="" className="w-100" />
					</Col>

					<Col lg="6">
						<div className="choose__content">
							<h4>Who we are?</h4>
							<h2>Take a look at the benefits we offer you</h2>
						</div>

						<div className="features mt-4">
							<div className="feature1 d-flex align-items-center justify-content-between">
								<div className="single__feature">
									<span>
										<i className="ri-truck-line"></i>
									</span>
									<h6>Free Home Delivery</h6>
									<p>Lorem ipsum dolor sit amet.</p>
								</div>

								<div className="single__feature">
									<span className="feature__icon-two">
										<i className="ri-money-dollar-circle-line"></i>
									</span>
									<h6>Return & Refund</h6>
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ChooseUs;
