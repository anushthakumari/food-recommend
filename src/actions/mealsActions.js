import axios from "../api/axios";
import {
	FETCH_CATEGORY_BEGIN,
	FETCH_CATEGORY_ERROR,
	FETCH_CATEGORY_MEALS_BEGIN,
	FETCH_CATEGORY_MEALS_ERROR,
	FETCH_CATEGORY_MEALS_SUCCESS,
	FETCH_CATEGORY_SUCCESS,
	FETCH_MEALS_BEGIN,
	FETCH_MEALS_ERROR,
	FETCH_MEALS_SUCCESS,
	FETCH_SINGLE_MEAL_BEGIN,
	FETCH_SINGLE_MEAL_ERROR,
	FETCH_SINGLE_MEAL_SUCCESS,
	FETCH_ALL_INDIAN_FOODS_BEGIN,
	FETCH_ALL_INDIAN_FOODS_ERROR,
	FETCH_ALL_INDIAN_FOODS_SUCCESS,
	FETCH_ALL_UK_FOODS_BEGIN,
	FETCH_ALL_UK_FOODS_SUCCESS,
	FETCH_ALL_UK_FOODS_ERROR,
} from "./actions";
import {
	CATEGORIES_URL,
	MEAL_CATEGORIES_URL,
	MEAL_SINGLE_URL,
	SEARCH_URL,
} from "../utils/constants";
import { fetch_all_in_foods } from "../schemas/indian_foods.schema";
import { fetch_all_uk_foods } from "../schemas/uk_foods.schema";

export const startFetchCategories = async (dispatch) => {
	try {
		dispatch({ type: FETCH_CATEGORY_BEGIN });
		const response = await axios.get(`${CATEGORIES_URL}`);
		dispatch({
			type: FETCH_CATEGORY_SUCCESS,
			payload: response.data.categories,
		});
	} catch (error) {
		dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message });
	}
};

export const startFetchSingleMeal = async (dispatch, id) => {
	try {
		dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });
		const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
		dispatch({ type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals });
	} catch (error) {
		dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message });
	}
};

export const startFetchMealByCategory = async (dispatch, category) => {
	try {
		dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN });
		const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
		dispatch({
			type: FETCH_CATEGORY_MEALS_SUCCESS,
			payload: response.data.meals,
		});
	} catch (error) {
		dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message });
	}
};

export const startFetchMealsBySearch = async (dispatch, searchTerm) => {
	try {
		dispatch({ type: FETCH_MEALS_BEGIN });
		const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
		dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals });
	} catch (error) {
		dispatch({ type: FETCH_MEALS_ERROR, payload: error.message });
	}
};

export const fetch_all_indian_foods = async (dispatch) => {
	try {
		dispatch({ type: FETCH_ALL_INDIAN_FOODS_BEGIN });
		const data = await fetch_all_in_foods();
		dispatch({ type: FETCH_ALL_INDIAN_FOODS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_ALL_INDIAN_FOODS_ERROR, payload: error.message });
	}
};

export const fetch_all_u_foods = async (dispatch) => {
	try {
		dispatch({ type: FETCH_ALL_UK_FOODS_BEGIN });
		const data = await fetch_all_uk_foods();
		dispatch({ type: FETCH_ALL_UK_FOODS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_ALL_UK_FOODS_ERROR, payload: error.message });
	}
};