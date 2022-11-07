import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { popularMenuFood } from '../../assets/fake-data/products';
import ProductCard from '../product-card/ProductCard';
import './popular-menu.css';

const PopularMenu = () => {
	return (
		<section id="popularmenu" className="pt-16">
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<h2 className="popular__menu-title">Popular food menu</h2>
					</Col>
					{popularMenuFood.map((item) => (
						<Col xs="6" sm="6" md="4" lg="3" className="mb-4" key={item.id}>
							<ProductCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default PopularMenu;
