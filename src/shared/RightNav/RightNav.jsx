import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
	FaGoogle,
	FaGithub,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
	return (
		<div>
			<h2>Login With</h2>
			<Button variant="outline-primary">
				{' '}
				<FaGoogle /> Login with Google
			</Button>{' '}
			<br />
			<Button variant="outline-secondary">
				<FaGithub /> Login with Github
			</Button>
			<div>
				<h2>Find Us On</h2>
				<ListGroup>
					<ListGroup.Item>
						<FaFacebookF /> Facebook
					</ListGroup.Item>
					<ListGroup.Item>
						<FaTwitter /> Twitter
					</ListGroup.Item>
					<ListGroup.Item>
						<FaInstagram /> Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone></QZone>
		</div>
	);
};

export default RightNav;
