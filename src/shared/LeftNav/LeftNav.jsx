import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://y-tobibur2021.vercel.app/categories')
			.then((result) => result.json())
			.then((data) => setCategories(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="mt-4">
			<h4>All Category</h4>
			<div className="category">
				{categories.map((category) => (
					<div className="category-link">
						<p key={category.id}>
							<Link
								to={`/category/${category.id}`}
								className="text-decoration-none text-dark link-category"
							>
								{category.name}
							</Link>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftNav;
