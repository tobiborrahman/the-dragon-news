import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				mollitia reprehenderit tempore. Dolor adipisci odit nostrum
				dignissimos voluptatum iure consectetur, aperiam temporibus eius
				eos ut eveniet facere natus et numquam!
			</p>

			<Link to="/register">Register</Link>
		</Container>
	);
};

export default Terms;
