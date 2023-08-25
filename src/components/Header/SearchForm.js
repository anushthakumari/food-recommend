import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../../actions/mealsActions";
import { UK_FOODS_FULFIL, FETCH_MEALS_SUCCESS } from "../../actions/actions";
import { Button } from "@mui/material";

const SearchForm = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [selectedFood, setselectedFood] = useState(null);
	const { dispatch, meals, indianFoods, ukfoods } = useMealContext();

	const handleSearchTerm = (e) => {
		e.preventDefault();
		if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
			setSearchTerm(e.target.value);
			setErrorMsg("");
		} else {
			setErrorMsg("Invalid search term ...");
		}
	};

	const handleChnage = (e, v) => {
		setselectedFood(v);
	};

	const handleSearchResult = (e) => {
		e.preventDefault();
		navigate("/");
		startFetchMealsBySearch(dispatch, searchTerm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentTarget = e.currentTarget;
		const height = currentTarget.height.value;
		const weight = currentTarget.weight.value;

		//daily protien intake
		const dailyProteinIntake = calculateDailyProteinIntake(height, weight);

		//counter
		let protiensCalulated = 0;

		const satisfyingFoods = ukfoods.filter((food) => {
			if (protiensCalulated > dailyProteinIntake) {
				return false;
			}

			const approximateProtienInFood = getRandomValueInRange(food.protiens);
			protiensCalulated = protiensCalulated + approximateProtienInFood;
			return true;
		});

		const [minProtein, maxProtein] = selectedFood.protiens
			.split("-")
			.map(Number);

		const matchingFoods = ukfoods.filter((food) => {
			const [foodMinProtein, foodMaxProtein] = food.protiens
				.split("-")
				.map(Number);
			return (
				selectedFood.category === food.category &&
				minProtein <= foodMaxProtein &&
				maxProtein >= foodMinProtein
			);
		});

		if (matchingFoods.length) {
			dispatch({
				type: FETCH_MEALS_SUCCESS,
				payload: [matchingFoods[0], selectedFood],
			});
		} else {
			const f = ukfoods.filter((food) => {
				return selectedFood.category === food.category;
			});
			dispatch({
				type: FETCH_MEALS_SUCCESS,
				payload: [f[0], selectedFood],
			});
		}

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
			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={indianFoods.map((v) => ({
					...v,
					label: v.title,
					value: v.doc_id,
				}))}
				sx={{ width: 300 }}
				onChange={handleChnage}
				renderInput={(params) => (
					<Box bgcolor={"white"} padding={"0.6rem"} borderRadius={"2rem"}>
						<TextField
							name="food"
							{...params}
							sx={{
								"& fieldset": { border: "none" },
							}}
							label="Search Foods"
						/>
					</Box>
				)}
			/>

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

			{/* <button
				type="submit"
				className="form-submit-btn text-white text-uppercase fs-14">
				<BsSearch className="btn-icon" size={20} />
			</button> */}
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
