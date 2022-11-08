import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import testimonialImg from '../../assets/images/review2.jpg';
import Slider from 'react-slick';
import './testimonial.css';

const Testimonials = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	return (
		<section>
			<Container>
				<Row>
					<Col sm="12" md="10" lg="8" className="m-auto">
						<div className="slider__wrapper d-flex align-items-center gap-5">
							<div className="slider__content w-50">
								<h2 className="mb-4">What our customers are saying</h2>
								<Slider {...settings}>
									<div>
										<div className="single__testimonial">
											<p className="review__content">
												This food is absolutely amazing! My family and I will definitely be coming
												back soon
											</p>
											<h6>Jhon Doe</h6>
											<p>Web Developer</p>
										</div>
									</div>

									<div>
										<div className="single__testimonial">
											<p className="review__content">
												I went to Bistro Avenue during my lunch break and i must say that their
												customer service is like no other. The food is just as amazing!
											</p>
											<h6>Jeff Gonzalez</h6>
											<p>Bartender</p>
										</div>
									</div>
								</Slider>
							</div>
							<div className="slider__img w-50">
								<img src={testimonialImg} className="w-100 reviewsImg" />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonials;
