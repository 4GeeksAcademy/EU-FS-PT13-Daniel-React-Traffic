import React from "react";
import Frame from "./Frame";
import "../../styles/index.css"
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Frame/>
		</div>
	);
};

export default Home;
