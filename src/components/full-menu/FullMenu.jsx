import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../product-card/ProductCard';
import {
	sandwichProducts,
	burgerProducts,
	pizzaProducts,
	dessertProducts,
	coffeeProducts,
} from '../../assets/fake-data/products';
import './menu-pack.css';

const FullMenu = () => {
	const [filter, setFilter] = useState('SANDWICH');
	const [products, setProducts] = useState(sandwichProducts);

	useEffect(() => {
		if (filter === 'BURGER') {
			setProducts(burgerProducts);
		}

		if (filter === 'SANDWICH') {
			setProducts(sandwichProducts);
		}

		if (filter === 'PIZZA') {
			setProducts(pizzaProducts);
		}

		if (filter === 'DESSERT') {
			setProducts(dessertProducts);
		}

		if (filter === 'COFFEE') {
			setProducts(coffeeProducts);
		}
	}, [filter]);
	return (
		<section id="menu">
			<Container>
				<Row>
					<Col lg="12" className="text-center mb-4">
						<h3 className="menu__title">Our Full Menu</h3>
					</Col>
					<Col lg="12" className="text-center mb-5">
						<button
							className={`filter-btn ${filter === 'SANDWICH' ? 'active__btn' : ''}`}
							onClick={() => setFilter('SANDWICH')}
						>
							Sandwiches
						</button>
						<button
							className={`filter-btn ${filter === 'BURGER' ? 'active__btn' : ''}`}
							onClick={() => setFilter('BURGER')}
						>
							Burgers
						</button>
						<button
							className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`}
							onClick={() => setFilter('PIZZA')}
						>
							Pizza
						</button>
						<button
							className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ''}`}
							onClick={() => setFilter('DESSERT')}
						>
							Desserts
						</button>
						<button
							className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`}
							onClick={() => setFilter('COFFEE')}
						>
							Coffee
						</button>
					</Col>

					{products.map((item) => (
						<Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
							<ProductCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default FullMenu;
