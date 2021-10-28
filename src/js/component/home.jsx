import React, { Fragment } from "react";
import Counter from "./Counter.jsx";

const Home = () => {
	return (
		<>
			<h1>Counter</h1>
			<div className="containerWhite">
				<div className="bordercontainer">
					<div className="container">
						<span className="seconds">
							<Counter start={0} time={100000} />
						</span>
						:
						<div className="minutes">
							<Counter start={0} time={10000} />
						</div>
						:
						<div className="minutes">
							<Counter start={0} time={1000} />
						</div>
					</div>
				</div>
			</div>
			<h2>&#x1f64c; Carolth7</h2>
		</>
	);
};

export default Home;
