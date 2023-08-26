import React from "react";
import { useParams } from "react-router-dom";

import MealSingle from "../../components/Meal/MealSingle";
import { useMealContext } from "../../context/mealContext";

import "./details.scss";

const Details = () => {
	const { id } = useParams();
	const { ukfoods, indianFoods } = useMealContext();

	let singleMeal;

	singleMeal = ukfoods.find((v) => v.doc_id === id);

	if (!singleMeal) {
		singleMeal = indianFoods.find((v) => v.doc_id === id);
	}

	return (
		<main className="main-content bg-whitesmoke">
			<MealSingle meal={singleMeal} />
		</main>
	);
};

export default Details;
