import React, { Fragment } from "react";
import Counter from "./Counter.jsx";

const Home = () => {
	return (
		<Fragment>
			<div className="row">
				<div className="col-6">
					<div className="leftOn">
						<div className="containerOnLeft">
							<div className="bordercontainer">
								<div className="container">
									<span className="seconds">
										<Counter start={0} time={50000} />
									</span>
									:
									<div className="minutes">
										<Counter start={0} time={5000} />
									</div>
									:
									<div className="minutes">
										<Counter start={0} time={500} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6">
					<div className="leftRight">
						<div className="containerOnRight">
							<div className="bordercontainer">
								<div className="container">
									<span className="seconds">
										<Counter start={0} time={1000} />
									</span>
									:
									<div className="minutes">
										<Counter start={0} time={100} />
									</div>
									:
									<div className="minutes">
										<Counter start={0} time={10} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="leftDown">
						<div className="containerDownLeft">
							<div className="bordercontainer">
								<div className="container">
									<span className="seconds">
										<Counter start={0} time={10000} />
									</span>
									:
									<div className="minutes">
										<Counter start={0} time={1000} />
									</div>
									:
									<div className="minutes">
										<Counter start={0} time={100} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6">
					<div className="rightDown">
						<div className="containerDownRight">
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
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
