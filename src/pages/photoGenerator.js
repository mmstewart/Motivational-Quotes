import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Axios from 'axios';
import GoogleFontLoader from 'react-google-font-loader';

import '../styles/photoGenerator.scss';

function PhotoGenerator() {
	const url =
		'https://api.unsplash.com/photos/random/?client_id=ijz5iajfeXo7ntCEX7bW8zKPW97865zCJ-18TcC57bQ&count=1&query=winter-mountains-day&orientation=landscape&content_filter=high&auto=compress&q=60';
	const [imagez, setImage] = useState([]);

	const getImage = () => {
		Axios.get(url).then((res) => {
			setImage(res.data);
		});
	};

	useEffect(() => {
		getImage();
	}, []);

	if (!imagez) {
		return <h1>Loading...</h1>;
	}
	return (
		<div id="root">
			{imagez.map((img) => {
				return (
					<div>
						{/* Minimalistic font from Google Fonts */}
						<GoogleFontLoader
							fonts={[
								{
									font: 'Montserrat',
									weights: [100],
								},
							]}
						/>
						{/* Credits to the rightful owner of the photo */}
						<div className="credit">
							Photo by{' '}
							{/* Clickable link that links to the right owner of the photo dynamically */}
							<a
								className="credit-link"
								style={{
									fontWeight: 'bolder',
									zIndex: 3,
									fontFamily: 'Montserrat, sans-serif',
									textDecoration: 'none',
								}}
								href={img.links.html}
							>
								{img.user.name}
							</a>
						</div>

						<div id="unsplash-image">
							{/* Generates dynamic images from Unsplash*/}
							<LazyLoadImage src={img.urls.raw} className="imgs" alt={img.alt_description} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PhotoGenerator;
