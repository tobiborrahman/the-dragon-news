import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import {
	FaEye,
	FaRegBookmark,
	FaRegStar,
	FaShareAlt,
	FaStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Home = ({ news }) => {
	const { _id, title, image_url, author, details, total_view, rating } = news;
	return (
		<Card className="my-4">
			<Card.Header className="d-flex align-items-center">
				<div>
					<Image
						style={{ height: '40px' }}
						src={author.img}
						roundedCircle
					/>
				</div>
				<div className="flex-grow-1 ps-3 mt-3">
					<h5 className="mb-0">{author.name}</h5>
					<p>{moment(author.published_date).format('YYYY-M-D')}</p>
				</div>
				<div>
					<FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Img variant="bottom" src={image_url} />
				<Card.Text>
					{details.length < 250 ? (
						<>{details}</>
					) : (
						<>
							{details.slice(0, 250)}... <br />
							<Link
								className="text-decoration-none text-danger"
								to={`/news/${_id}`}
							>
								Read More
							</Link>
						</>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex pb-0">
				<div className="d-flex flex-grow-1">
					<Rating
						className="text-warning"
						placeholderRating={rating.number}
						emptySymbol={<FaRegStar></FaRegStar>}
						placeholderSymbol={<FaStar></FaStar>}
						fullSymbol={<FaStar></FaStar>}
						readonly
					/>
					<p className="pt-1 ps-2">{rating.number}</p>
				</div>
				<div>
					<FaEye></FaEye> <span>{total_view}</span>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default Home;
