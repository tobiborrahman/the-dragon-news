import React, { useEffect, useState } from 'react';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/categories')
			.then((result) => result.json())
			.then((data) => setCategories(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h4>All Category</h4>
		</div>
	);
};

export default LeftNav;
