import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};

	return (
		<Container>
			<Navbar collapseOnSelect bg="light" variant="light">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto">
						<Link className="pt-1" to="/category/0">
							Home
						</Link>

						<Nav.Link href="#pricing">About</Nav.Link>
						<Nav.Link href="#pricing">career</Nav.Link>
					</Nav>
					<Nav>
						{user && (
							<FaUserCircle
								style={{
									fontSize: '2rem',
									marginTop: '2.5px',
								}}
							></FaUserCircle>
						)}
						{user ? (
							<Button onClick={handleLogOut} variant="dark">
								Log Out
							</Button>
						) : (
							<Link to="/login">
								<Button variant="dark">Login</Button>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
