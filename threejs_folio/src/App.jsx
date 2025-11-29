import React from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './layout/HeroSection';
import About from './layout/About';
import Footer from './layout/Footer';

const App = () => {
	return (
		<main className='max-w-7xl mx-auto'>
			<Navbar />
			<HeroSection />
			<About />
			<Footer />
		</main>
	);
};

export default App;
