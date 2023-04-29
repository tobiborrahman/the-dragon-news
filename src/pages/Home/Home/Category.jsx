import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Home from './Home';

const Category = () => {
	const { id } = useParams();
	const categoryNews = useLoaderData();
	return (
		<div>
			{id && <h2>This is single category: {categoryNews.length}</h2>}
			{categoryNews.map((news) => (
				<Home key={news._id} news={news}></Home>
			))}
		</div>
	);
};

export default Category;
