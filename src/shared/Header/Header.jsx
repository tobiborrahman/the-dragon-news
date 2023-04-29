import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
	return (
		<Container>
			<div className="text-center mt-4">
				<img src={logo} alt="" />
				<p>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p>{moment().format('dddd, MMMM D, YYYY, h:mm:ss a')}</p>
			</div>
			<div className="d-flex my-4">
				<Button variant="danger">Danger</Button>
				<Marquee className="text-danger" duration="1000">
					I can be a React component, multiple React components, or
					just some text. I can be a React component, multiple React
					components, or just some text. I can be a React component,
					multiple React components, or just some text. I can be a
					React component, multiple React components, or just some
					text.
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;
