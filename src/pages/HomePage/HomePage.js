import React from "react";
import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import PopularList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
// import AddFoodItems from "../AddFoodItems";

const HomePage = () => {
	const { meals, allIndianFoodsLoading, ukFoodsLoading, ukfoods } =
		useMealContext();

	return (
		<React.Fragment>
			{/* <AddFoodItems /> */}
			<Header />
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
					<PopularList foods={ukfoods} />
				)}
			</main>
		</React.Fragment>
	);
};

export default HomePage;
