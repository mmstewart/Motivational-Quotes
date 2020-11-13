import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Axios from 'axios';
import GoogleFontLoader from 'react-google-font-loader';

import '../styles/photoGenerator.scss';

/* Safety Filter of photos. Other option is low */
let content_filter = 'high';

/* Quality of photos. Default: 75 */
let quality = 60;

/* Collection id number of photos from unsplash.com */
let collections = 83924525;

/* Search term of photos. Replace with collectio ns. Example: query=snowy-mountains */
//let query = 'winter-mountains';

function PhotoGenerator() {
	/* Your unsplash.com/developers api key */
	const key = '';

	/* Amount of photos on page. Set at 1. Not recommended to put more photos on page */
	const count = 1;

	/* Set orientation of photos. Not recommended to put in portrait and squarish */
	const orientation = 'landscape';

	/* API URL */
	const url =
		'https://api.unsplash.com/photos/random/?client_id=' +
		key +
		'&count=' +
		count +
		'&orientation=' +
		orientation +
		'&content_filter=' +
		content_filter +
		'&auto=compress&q=' +
		quality +
		'&collections=' +
		collections;
	const [imagez, setImage] = useState([]);

	/* Gets the single image from our collection */
	const getImage = () => {
		Axios.get(url).then((res) => {
			setImage(res.data);
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
							Photo by {/* Clickable link that links to the right owner of the photo dynamically */}
							<a
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
							<LazyLoadImage src={img.urls.raw} className="imgs" alt={img.alt_description} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PhotoGenerator;
