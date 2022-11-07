import React, { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.css';
import CardModal from '../card-modal/CardModal';
import { Container } from 'reactstrap';

const navLinks = [
	{
		display: 'Home',
		url: '#home',
	},
	{
		display: 'Menu',
		url: '#menu',
	},
	{
		display: 'Popular Menu',
		url: '#coke',
	},
	{
		display: 'Contact',
		url: '#contact',
	},
];

// Refreshes page
export const titleRefresh = () => {
	window.location.reload(false);
};

// Slider Menu that goes right to left
const Header = () => {
	const menuRef = useRef();
	const menuToggle = () => menuRef.current.classList.toggle('active__menu');

	return (
		<header className="header">
			<Container>
				<div className="navigation">
					<div className="logo">
						<h2 className="title__font d-flex align-items-center gap-1" onClick={titleRefresh}>
							<span>
								<i className="ri-restaurant-line"></i>
							</span>{' '}
							Bistro Avenue
						</h2>
					</div>

					<div className="nav__menu" ref={menuRef}>
						<div className="nav__list__wrapper d-flex align-items-center gap-5">
							<div className="mobile__menu mobile__close">
								<span>
									<i className="ri-close-line" onClick={menuToggle}></i>
								</span>
							</div>
							<ul className="nav__list">
								{navLinks.map((item, index) => (
									<li className="nav__item" key={index}>
										<HashLink to={item.url} onClick={menuToggle}>
											{item.display}
										</HashLink>
									</li>
								))}
							</ul>

							<div className="menu__right">
								<div className="custom__search">
									<input type="text" placeholder="search item..." />
									<span className="">
										<i className="ri-search-line" />
									</span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<span className="cart__icon">
							<i className="ri-shopping-basket-line"></i>
							<span className="badge">0</span>
						</span>
					</div>

					<div className="mobile__menu">
						<span>
							<i className="ri-menu-line" onClick={menuToggle}></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
