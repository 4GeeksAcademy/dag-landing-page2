import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { CardRow } from "./CardRow";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardRow>
				<Card />
				<Card />
				<Card />
				<Card />
			</CardRow>
			<Footer />
		</div>
	);
};

export default Home;
