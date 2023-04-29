import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
	const { userEmailPassword } = useContext(AuthContext);

	const [accepted, setAccepted] = useState(false);

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;

		console.log(name, email, password, photo);

		userEmailPassword(email, password)
			.then((loggedUser) => {
				const createdUser = loggedUser.user;
				console.log(createdUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};

	return (
		<Container>
			<Form
				onSubmit={handleRegister}
				className="w-50 mx-auto border border-light shadow-lg rounded-2 p-4 mt-5"
			>
				<h3 className="text-center">Register your account</h3>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label className=" fw-bold">Your Name</Form.Label>
					<Form.Control
						className="border-0 bg-light"
						type="text"
						name="name"
						placeholder="Enter Name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicurl">
					<Form.Label className=" fw-bold">Photo Url</Form.Label>
					<Form.Control
						className="border-0 bg-light"
						type="text"
						name="photo"
						placeholder="Enter Photo url"
						required
					/>
				</Form.Group>
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
					<Form.Check
						onClick={handleAccepted}
						type="checkbox"
						label={
							<>
								Accept{' '}
								<Link to="/terms">Terms and Conditions</Link>
							</>
						}
					/>
				</Form.Group>
				<Button
					disabled={!accepted}
					variant="dark"
					className="w-100"
					type="submit"
				>
					Register
				</Button>
				<br />
				<Form.Text className="text-center">
					Already Have an Account?
					<Link
						className="text-decoration-none text-danger"
						to="/login"
					>
						Login
					</Link>
				</Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
