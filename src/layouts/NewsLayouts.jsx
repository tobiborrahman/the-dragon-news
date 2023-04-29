import React from 'react';
import Header from '../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../shared/RightNav/RightNav';

const NewsLayouts = () => {
	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
					<Col lg={9}>
						<Outlet></Outlet>
					</Col>
					<Col lg={3}>
						<RightNav></RightNav>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default NewsLayouts;
