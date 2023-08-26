import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useMealContext } from "../../context/mealContext";
import { UK_FOODS_FULFIL } from "../../actions/actions";

import "./Header.scss";

const SearchForm = () => {
	const { dispatch, ukfoods } = useMealContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentTarget = e.currentTarget;
		const height = currentTarget.height.value;
		const weight = currentTarget.weight.value;

		//daily protien intake
		const dailyProteinIntake = calculateDailyProteinIntake(height, weight);

		//counter
		let protiensCalulated = 0;

		const satisfyingFoods = shuffle(ukfoods).filter((food) => {
			if (protiensCalulated > dailyProteinIntake) {
				return false;
			}

			const approximateProtienInFood = getRandomValueInRange(food.protiens);
			protiensCalulated = protiensCalulated + approximateProtienInFood;
			return true;
		});

		dispatch({
			type: UK_FOODS_FULFIL,
			payload: {
				title:
					"Meals To Fulfill your daily protein needs, which is " +
					parseInt(dailyProteinIntake) +
					"gm",
				meals: satisfyingFoods,
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} className="search-form">
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={"1rem"}>
				<Box padding={"1rem"} bgcolor={"white"} borderRadius={"1rem"}>
					<TextField
						name="height"
						type="number"
						label="Your Height (in Ft)"
						required
					/>
				</Box>
				<Box padding={"1rem"} bgcolor={"white"} borderRadius={"1rem"}>
					<TextField
						name="weight"
						type="number"
						label="Your Weight (in Kg)"
						required
					/>
				</Box>
			</Box>

			<Button type="submit" variant="contained" fullWidth>
				Submit
			</Button>
		</form>
	);
};

export default SearchForm;

function calculateDailyProteinIntake(heightFeet, weightKG) {
	// Convert height from feet to centimeters
	const heightCM = heightFeet * 30.48; // 1 foot = 30.48 centimeters

	const proteinPerKg = 1.2; // Recommended protein intake per kg of body weight
	const proteinIntake = weightKG * proteinPerKg;

	// Adjust protein intake based on height (a simple approximation)
	const heightFactor = heightCM / 100; // Convert height to meters
	const adjustedProteinIntake = proteinIntake + heightFactor * 2;

	return adjustedProteinIntake;
}

function getRandomValueInRange(rangeString) {
	const [min, max] = rangeString.split("-").map(Number);
	const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomValue;
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
