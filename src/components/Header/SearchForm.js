import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./Header.scss";
import { useMealContext } from "../../context/mealContext";
import { FETCH_MEALS_SUCCESS } from "../../actions/actions";

const SearchForm = () => {
	const { dispatch, indianFoods, ukfoods } = useMealContext();

	const handleChnage = (e, v) => {
		const selectedFood = v;
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
	};

	return (
		<div className="search-form">
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
		</div>
	);
};

export default SearchForm;
