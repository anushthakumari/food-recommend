import React from "react";
import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../components/Loader/Loader";
import PopularList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
	const {
		meals,
		allIndianFoodsLoading,
		ukFoodsLoading,
		ukfoods,
		proteinSatisfyingFoods,
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

			{proteinSatisfyingFoods ? (
				<PopularList
					title={proteinSatisfyingFoods.title}
					foods={proteinSatisfyingFoods.meals}
				/>
			) : null}

			{ukFoodsLoading || allIndianFoodsLoading ? (
				<Loader />
			) : (
				<PopularList foods={ukfoods} />
			)}
		</main>
	);
};

export default HomePage;
