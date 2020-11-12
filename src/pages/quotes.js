import React, { useState, useEffect } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import twitterIcon from '../images/twitter.png';

import '../styles/quotes.scss';

const Quotes = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	/* Quotes a quote from the JSON file */
	const getQuote = () => {
		let url =
			'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				/* Get the array of json file */
				let dataQuotes = data.quotes;
				/* Get a random number from 0 to the length of the array */
				let randomNum = Math.floor(Math.random() * dataQuotes.length);
				/* Access the random number of the json file to output quote and author */
				let randomQuote = dataQuotes[randomNum];
				setQuote(randomQuote.quote);
				setAuthor(randomQuote.author);
			});
	};

	/* returns getQuote function */
	useEffect(() => {
		getQuote();
	}, []);

	/* Generates a new quote and author on click  */
	const handleClick = () => {
		getQuote();
	};

	return (
		/* Contains a box filled with the quote and buttons */
		<div className="quote-box">
			{/* Minimalistic font from Google Fonts */}
			<GoogleFontLoader
				fonts={[
					{
						font: 'Montserrat',
						weights: [100],
					},
				]}
			/>

			<div id="text">
				<p
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontSize: '30px',
						fontWeight: 900,
					}}
				>
					{quote}
				</p>
			</div>
			<div id="author">
				<p
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontSize: '20px',
						fontWeight: 600,
					}}
				>
					{author}
				</p>
			</div>

			<div id="buttons">
				<div className="social-media">
					<a
						onClick={() => {
							window.open(
								'https://twitter.com/intent/tweet/?text=' +
									encodeURIComponent(
										quote + ' \n\n-' + author + '\n\nvia https://reason-quotes.netlify.app/'
									)
							);
						}}
						href="/#"
						id="tweet-quote"
						title="Share on Twitter"
					>
						<span>
							<img src={twitterIcon} alt="" />
						</span>
					</a>
				</div>
				<button
					id="new-quote"
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontWeight: 900,
					}}
					onClick={handleClick}
				>
					Generate Quote
				</button>
			</div>
		</div>
	);
};

export default Quotes;
