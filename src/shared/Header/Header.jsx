import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
	return (
		<Container>
			<div className="text-center">
				<img src={logo} alt="" />
				<p>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p>{moment().format('dddd, MMMM D, YYYY, h:mm:ss a')}</p>
			</div>
			<div className="d-flex">
				<Button variant="danger">Danger</Button>
				<Marquee className="text-danger">
					I can be a React component, multiple React components, or
					just some text. I can be a React component, multiple React
					components, or just some text. I can be a React component,
					multiple React components, or just some text. I can be a
					React component, multiple React components, or just some
					text.
				</Marquee>
			</div>
			<div>
				<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
					<Container>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mx-auto">
								<Nav.Link href="#features">Home</Nav.Link>
								<Nav.Link href="#pricing">About</Nav.Link>
								<Nav.Link href="#pricing">career</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="#deets">Profile</Nav.Link>
								<Nav.Link eventKey={2} href="#memes">
									<Button variant="dark">Dark</Button>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</Container>
	);
};

export default Header;
