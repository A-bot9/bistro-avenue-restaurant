import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { titleRefresh } from '../header/Header';
import './footer.css';

const footerQuickLinks = [
	{ display: 'Terms & Conditions', url: '#' },
	{ display: 'Privacy Policy', url: '#' },
	{ display: 'Return & Refund', url: '#' },
	{ display: 'Payment Method', url: '#' },
];

const footerLinks = [
	{ display: 'About Us', url: '' },
	{ display: 'Menu', url: '#' },
	{ display: 'Popular Menu', url: '#' },
	{ display: 'Contact', url: '#' },
];

const Footer = () => {
	return (
		<footer id="contact" className="footer">
			<div className="footer__top">
				<Container>
					<Row>
						<Col sm="6" md="4" lg="4">
							<div className="logo">
								<h2
									className="title__font d-flex align-items-center gap-1"
									onClick={titleRefresh}
								>
									<span>
										<i class="ri-restaurant-line"></i>
									</span>{' '}
									Bistro Avenue
								</h2>
								<p>WE BRING THE GOODNESS</p>
							</div>
						</Col>

						<Col sm="6" md="4" lg="3">
							<h5 className="footer__link-title">Info Links</h5>

							<ListGroup>
								{footerQuickLinks.map((item, index) => (
									<ListGroupItem key={index} className="link__item">
										<a href={item.url}>{item.display}</a>
									</ListGroupItem>
								))}
							</ListGroup>
						</Col>

						<Col sm="6" md="4" lg="2">
							<h5 className="footer__link-title">Quick Links</h5>

							<ListGroup>
								{footerLinks.map((item, index) => (
									<ListGroupItem key={index} className="link__item">
										<a href={item.url}>{item.display}</a>
									</ListGroupItem>
								))}
							</ListGroup>
						</Col>

						<Col sm="6" md="4" lg="3">
							<h5 className="footer__link-title">Contact</h5>

							<ListGroup>
								<ListGroupItem className="link__item d-flex align-items-center gap-3">
									<i className="ri-map-pin-line"></i> Earth Dr
								</ListGroupItem>

								<ListGroupItem className="link__item  d-flex align-items-center gap-3">
									<i className="ri-mail-line"></i> email@email.com
								</ListGroupItem>

								<ListGroupItem className="link__item  d-flex align-items-center gap-3">
									<i className="ri-phone-line"></i> +000-000-0000
								</ListGroupItem>
								<ListGroupItem className="link__item  d-flex align-items-center gap-3">
									<i className="ri-instagram-line " />
									<i className="ri-twitter-line" />
									<i className="ri-facebook-circle-fill" />
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="footer__bottom">
				<Container>
					<Row>
						<Col lg="12">
							<p>Copyright 2022, developed by Adrian Leal. All rights reserved.</p>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
