import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import NewsLayouts from '../layouts/NewsLayouts';
import News from '../pages/Home/News/News';
import Category from '../pages/Home/Home/Category';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Home/Login/Login';
import Register from '../pages/Home/Register/Register';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import Terms from '../shared/Terms/Terms';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: '/',
				element: <Navigate to="/category/0"></Navigate>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: 'terms',
				element: <Terms></Terms>,
			},
		],
	},
	{
		path: 'category',
		element: <Main></Main>,
		children: [
			{
				path: ':id',
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
		path: '/news',
		element: <NewsLayouts></NewsLayouts>,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoute>
						<News></News>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);

export default router;
