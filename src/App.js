import './styles/App.scss';
import './components/header.js';

import Header from './components/header.js';
import Footer from './components/footer.js';
import PhotoGenerator from './pages/photoGenerator.js';
import Quotes from './pages/quotes.js';

/* Function that runs the classes */
function App() {
	return (
		<div className="App">
			<Header />
			<PhotoGenerator />
			<Quotes />
			<Footer />
		</div>
	);
}

export default App;
