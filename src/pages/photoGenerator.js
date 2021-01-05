import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Axios from 'axios';
import GoogleFontLoader from 'react-google-font-loader';
import '../styles/photoGenerator.scss';

/* Safety Filter of photos. Other option is low */
let content_filter = 'high';

/* Quality of photos. Default: 75 */
let quality = 75;

function PhotoGenerator() {
	/* Your unsplash.com/developers api key */
	const key = process.env.API_KEY;

	/* Amount of photos on page. Set at 1. Do NOT put more photos on page */
	const count = 1;

	/* API URL */
	const url =
		'https://api.unsplash.com/photos/random/?client_id=' +
		key +
		'&count=' +
		count +
		'&content_filter=' +
		content_filter +
		'&q=' +
		quality +
		'&w=' +
		window.innerWidth +
		'&h=' +
		window.innerHeight +
		'&cs=tinysrgb&collections=75711168&fit=max&fm=jpg&crop=entropy';

	const [imagez, setImage] = useState([]);

	/* Gets the single image from our collection */
	const getImage = () => {
		Axios.get(url).then((res) => {
			saveNextImage();
			setImage(res.data);
		});
	};

	const saveNextImage = () => {
		Axios.get(url).then((img) => {
			localStorage.setItem('savedBackground', JSON.stringify(img));
		});
	};

	/* Returns the getImage function, so it can now be returned */
	useEffect(() => {
		getImage();
		// eslint-disable-next-line
	}, []);

	/* If condition, if there is no image, return to a text saying loading... */
	if (!imagez) {
		return <h1>Loading...</h1>;
	}
	return (
		<div id="root">
			{imagez.map((img, i) => {
				return (
					<div key={i}>
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
						<div className="credit" style={{ fontFamily: 'Montserrat, sans-serif' }}>
							Photo by {/* Clickable link that links to the right owner of the photo dynamically */}
							<a
								rel="preconnect"
								className="credit-link"
								style={{
									fontWeight: 'bolder',
									zIndex: 3,
									fontFamily: 'Montserrat, sans-serif',
								}}
								href={img.links.html}
							>
								{img.user.name}
							</a>
						</div>

						<div id="unsplash-image">
							{/* Generates dynamic images from Unsplash*/}
							<LazyLoadImage src={img.urls.regular} className="imgs" alt={img.alt_description} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PhotoGenerator;
