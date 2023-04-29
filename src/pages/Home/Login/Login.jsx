import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/category/0';

	console.log('login page location', location);

	const handleSignIn = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((signedUser) => {
				const signInUser = signedUser.user;
				console.log(signInUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Container>
			<Form
				onSubmit={handleSignIn}
				className="w-50 mx-auto border border-light shadow-lg rounded-1 p-4 mt-5"
			>
				<h3 className="text-center">Login your account</h3>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label className=" fw-bold">Email address</Form.Label>
					<Form.Control
						className="border-0 bg-light"
						type="email"
						name="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label className=" fw-bold">Password</Form.Label>
					<Form.Control
						className="border-0 bg-light"
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="dark" className="w-100" type="submit">
					Submit
				</Button>
				<br />
				<Form.Text className=" text-center">
					Don't Have an Account?
					<Link
						className="text-decoration-none text-danger"
						to="/register"
					>
						Register
					</Link>
				</Form.Text>
			</Form>
		</Container>
	);
};

export default Login;
