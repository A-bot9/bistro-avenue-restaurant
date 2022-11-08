import React, { Fragment } from 'react';
import ChooseUs from '../components/choose-us/ChooseUs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import FullMenu from '../components/full-menu/FullMenu';
import PopularMenu from '../components/popular-menu/PopularMenu';
import Feedback from '../components/feedback/Testimonials';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<HeroSlider />
			<PopularMenu />
			<ChooseUs />
			<FullMenu />
			<Feedback />
			<Footer />
		</Fragment>
	);
};

export default Home;
