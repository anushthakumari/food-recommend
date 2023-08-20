import React, { createContext, useContext, useEffect, useReducer } from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealsActions";
import {
	fetch_all_indian_foods,
	fetch_all_u_foods,
} from "../actions/mealsActions";

const initialState = {
	categories: [],
	categoryLoading: false,
	categoryError: false,
	categoryMeals: [],
	categoryMealsLoading: false,
	categoryMealsError: false,
	meals: [],
	mealsLoading: false,
	mealsError: false,
	meal: [],
	mealLoading: false,
	mealError: false,
	indianFoods: [],
	ukfoods: [],
};

const MealContext = createContext({});
export const MealProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mealReducer, initialState);

	useEffect(() => {
		startFetchCategories(dispatch);
		fetch_all_indian_foods(dispatch);
		fetch_all_u_foods(dispatch);
	}, []);

	return (
		<MealContext.Provider
			value={{
				...state,
				dispatch,
				startFetchCategories,
			}}>
			{children}
		</MealContext.Provider>
	);
};

export const useMealContext = () => {
	return useContext(MealContext);
};
