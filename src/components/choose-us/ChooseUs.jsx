import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import deliveryImg from '../../assets/images/delivery01.jpeg';
import './choose-us.css';

const ChooseUs = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col md="6" lg="6">
						<img src={deliveryImg} alt="" className="w-75 deliveryImg mb-4" />
					</Col>

					<Col md="6" lg="6">
						<div className="choose__content">
							<h4>Who we are?</h4>
							<h2>Take a look at the benefits we offer you</h2>
						</div>

						<div className="features mt-4">
							<div className="d-flex mt-3 align-items-center justify-content-between gap-5">
								<div className="single__feature ">
									<span>
										<i className="ri-truck-line"></i>
									</span>
									<h6>Free Home Delivery</h6>
									<p>NO EXTRA CHARGE</p>
								</div>

								<div className="single__feature">
									<span className="feature__icon-two">
										<i className="ri-money-dollar-circle-line"></i>
									</span>
									<h6>Return & Refund</h6>
									<p>GURANTEED</p>
								</div>
							</div>

							<div className="d-flex mt-3 flex align-items-center justify-content-between gap-5">
								<div className="single__feature">
									<span className="feature__icon-3">
										<i className="ri-secure-payment-line"></i>
									</span>
									<h6>Secure Payment</h6>
									<p>100% NO WORRIES</p>
								</div>

								<div className="single__feature">
									<span className="feature__icon-4">
										<i className="ri-24-hours-line"></i>
									</span>
									<h6>24/7 Hours Support</h6>
									<p>ALL DAY EVERYDAY</p>
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
