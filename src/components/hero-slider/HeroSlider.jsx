import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';

import { sliderData } from '../../assets/fake-data/slider';
import './slider.css';

const HeroSlider = () => {
	return (
		<section>
			<Container>
				<Slider>
					{sliderData.map((slider) => (
						<div>
							<div className="slider__wrapper d-flex align-item-center justify-content-between pt-5">
								<div className="slider__content w-50 ps-2">
									<h2>{slider.title}</h2>
									<p>{slider.desc}</p>
									<button className="btn">Explore Food</button>
								</div>

								<div className="sldier__img w-50">
									<img src={slider.imgUrl} alt="" className="w-100" />
								</div>
							</div>
						</div>
					))}
				</Slider>
			</Container>
		</section>
	);
};

export default HeroSlider;
