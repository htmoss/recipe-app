import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Recipe = ({ title, calories, image, ingredients, source, url, mins }) => {
	const getMins = (mins) => {
		if (mins > 0) {
			return ` | ${mins} mins`;
		} else {
			return '';
		}
	};

	return (
		<div className='recipe'>
			<div className='recipe-info'>
				<div className='text'>
					<a
						href={url}
						className='btn-none'
						target='_blank'
						rel='noopener noreferrer'
					>
						<h1>{title}</h1>
					</a>
					<p>
						{Math.floor(calories)} Cal. | {source}
						{getMins(mins)}
					</p>
					<ul>
						{ingredients.map((ingredient) => {
							return <li key={uuidv4()}>{ingredient}</li>;
						})}
					</ul>
				</div>
				<div className='right-sect'>
					<img src={image} alt='' />
					<a
						className='btn-dark'
						href={url}
						target='_blank'
						rel='noopener noreferrer'
					>
						See More
					</a>
				</div>
			</div>
			{/* <button onClick={backToTop} className='back'>Back to Top</button> */}
		</div>
	);
};

export default Recipe;
