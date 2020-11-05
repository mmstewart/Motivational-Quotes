import React from 'react';
import '../styles/footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<h1
					style={{
						color: `#111`,
						letterSpacing: `1.1px`,
					}}
				>
					Marcus Stewart &copy; {new Date().getFullYear().toString()}{' '}
				</h1>
			</footer>
		);
	}
}

export default Footer;
