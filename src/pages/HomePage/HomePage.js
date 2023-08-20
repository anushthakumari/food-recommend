import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
	const {
		categories,
		meals,
		categoryLoading,
		mealsLoading,
		indianFoods,
		allIndianFoodsLoading,
		ukFoodsLoading,
		ukfoods,
	} = useMealContext();

	return (
		<main className="main-content">
			{allIndianFoodsLoading ? (
				<Loader />
			) : meals === null ? (
				<NotFound />
			) : meals?.length ? (
				<MealList meals={meals} />
			) : (
				""
			)}
			{ukFoodsLoading || allIndianFoodsLoading ? (
				<Loader />
			) : (
				<CategoryList foods={ukfoods} />
			)}
		</main>
	);
};

export default HomePage;
