import './styles/App.scss';
import './components/header.js';

import Header from './components/header.js';
import Footer from './components/footer.js';
import PhotoGenerator from './pages/photoGenerator.js';

/* Function that runs the classes */
function App() {
	return (
		<div className="App">
			<Header />
			<PhotoGenerator />
			<Footer />
		</div>
	);
}

export default App;
