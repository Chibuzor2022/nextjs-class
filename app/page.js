import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import PopularProducts from "./components/PopularProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Banner from "./components/Banner";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer"


const Home = () => {
	return (
		<div>
			<Navbar />
			<Slider />
			<FeaturedProducts/>
			<PopularProducts />
			<Banner />
			<NewsLetter />
			<Footer/>
		</div>
	);
};

export default Home;
