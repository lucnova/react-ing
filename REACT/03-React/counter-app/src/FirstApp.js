import React from "react";

const FirstApp = () => {
	const title = "Eu te amo";
	const imgSrc = "https://pbs.twimg.com/media/EqNM6G3XYAAUe14.jpg";

	return (
		<>
			<h1>{title}</h1>
			<p>macaquinho chupando pirulito azul</p>
			<img src={imgSrc} alt="macaquinho chupando pirulito azul"></img>
			<h1 className="desc">{title}</h1>
		</>
	);
};

export default FirstApp;
