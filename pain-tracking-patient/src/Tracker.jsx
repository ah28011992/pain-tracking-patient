import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { db, auth } from "./database";
import { collection, doc, setDoc } from "firebase/firestore";
import { formattedDate } from "./assets/utility";

function valuetext(value) {
	return `${value}°C`;
}
function Tracker() {
	const currentUser = auth.currentUser;

	const [painScore, setPainScore] = useState(0);

	const data = {
		painLevel: painScore,
		timeStamp: formattedDate,
	};

	function handleSliderChange(event, newValue) {
		setPainScore(newValue);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const userId = currentUser.uid;

			const userDocRef = doc(db, "users", userId);
			const subcollectionRef = collection(userDocRef, "painData");

			const newDocRef = doc(subcollectionRef);

			await setDoc(newDocRef, data);
			console.log(data, "submitted successfully");
		} catch (error) {
			console.error("Error submitting data:", error);
		}
	};

	return (
		<Layout>
			<h2>Track your pain</h2>
			<p>Use the slider below to set your pain score and then submit</p>
			<Box
				id='tracker'
				sx={{ width: 800 }}>
				<Slider
					aria-label='scale'
					defaultValue={0}
					getAriaValueText={valuetext}
					valueLabelDisplay='auto'
					step={1}
					marks
					min={0}
					max={10}
					value={painScore}
					onChange={handleSliderChange}
				/>
				<button
					type='submit'
					onClick={handleSubmit}>
					Submit
				</button>
			</Box>
		</Layout>
	);
}

export default Tracker;
