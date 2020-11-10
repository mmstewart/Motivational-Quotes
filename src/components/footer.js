import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

import '../styles/footer.scss';

/* Footer of Web Application */
class Footer extends React.Component {
	render() {
		return (
			/* Set Footer of React App */
			<footer>
				{/* Minimalistic font from Google Fonts */}
				<GoogleFontLoader
					fonts={[
						{
							font: 'Montserrat',
							weights: [100],
						},
					]}
				/>
				{/* Set font and font size of footer text */}
				<p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13 }}>
					Marcus Stewart &copy; {new Date().getFullYear().toString()}{' '}
				</p>
			</footer>
		);
	}
}

export default Footer;
