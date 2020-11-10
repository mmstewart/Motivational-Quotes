import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

import '../styles/header.scss';

/* Header of Web Application */
class Header extends React.Component {
	render() {
		return (
			/* Set Header of React App */
			<header>
				{/* Minimalistic font from Google Fonts */}
				<GoogleFontLoader
					fonts={[
						{
							font: 'Montserrat',
							weights: [100],
						},
					]}
				/>
				{/* Set font, font size, and font weight of header text */}
				<p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 36, fontWeight: 900 }}>Reason</p>
			</header>
		);
	}
}

export default Header;
