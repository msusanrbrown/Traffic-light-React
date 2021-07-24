import React from "react";
import PropTypes from "prop-types";

export function TrafficLight() {
	const [color, setColor] = React.useState("yellow");

	return (
		<div>
			<div
				onClick={() => {
					setColor("");
				}}
				className={
					"topoflight" + (color === "null" ? " selected" : "")
				}></div>
			<div className="main">
				<div
					onClick={() => {
						setColor("red");
					}}
					className={
						"red" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("yellow");
					}}
					className={
						"yellow" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("green");
					}}
					className={
						"green" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
}
