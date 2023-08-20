import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../../actions/mealsActions";
import { FETCH_MEALS_SUCCESS } from "../../actions/actions";

const SearchForm = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
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
		const { doc_id } = v;
		dispatch({
			type: FETCH_MEALS_SUCCESS,
			payload: ukfoods.filter((v) => v.indian_food_id.trim() === doc_id),
		});
	};

	const handleSearchResult = (e) => {
		e.preventDefault();
		navigate("/");
		startFetchMealsBySearch(dispatch, searchTerm);
	};

	return (
		<div className="search-form flex align-center">
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
							{...params}
							sx={{
								"& fieldset": { border: "none" },
							}}
							label="Search Foods"
						/>
					</Box>
				)}
			/>

			{/* <button
				type="submit"
				className="form-submit-btn text-white text-uppercase fs-14">
				<BsSearch className="btn-icon" size={20} />
			</button> */}
		</div>
	);
};

export default SearchForm;
