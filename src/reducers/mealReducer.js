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
	FETCH_ALL_INDIAN_FOODS_SUCCESS,
	FETCH_ALL_INDIAN_FOODS_ERROR,
	FETCH_ALL_UK_FOODS_BEGIN,
	FETCH_ALL_UK_FOODS_SUCCESS,
	FETCH_ALL_UK_FOODS_ERROR,
	UK_FOODS_FULFIL,
} from "../actions/actions";

export const mealReducer = (state, action) => {
	switch (action.type) {
		case FETCH_CATEGORY_BEGIN:
			return {
				...state,
				categoryLoading: true,
			};
		case FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				categoryLoading: false,
				categories: action.payload,
			};
		case FETCH_CATEGORY_ERROR:
			return {
				...state,
				categoryLoading: false,
				categoryError: true,
			};
		case FETCH_MEALS_BEGIN:
			return {
				...state,
				mealsLoading: true,
			};
		case FETCH_MEALS_SUCCESS:
			return {
				...state,
				mealsLoading: false,
				meals: action.payload,
			};
		case FETCH_MEALS_ERROR:
			return {
				...state,
				mealsLoading: false,
				mealsError: true,
			};
		case FETCH_SINGLE_MEAL_BEGIN:
			return {
				...state,
				mealLoading: true,
			};
		case FETCH_SINGLE_MEAL_SUCCESS:
			return {
				...state,
				mealLoading: false,
				meal: action.payload,
			};
		case FETCH_SINGLE_MEAL_ERROR:
			return {
				...state,
				mealLoading: false,
				mealError: true,
			};
		case FETCH_CATEGORY_MEALS_BEGIN:
			return {
				...state,
				categoryMealsLoading: true,
			};
		case FETCH_CATEGORY_MEALS_SUCCESS:
			return {
				...state,
				categoryMealsLoading: false,
				categoryMeals: action.payload,
			};
		case FETCH_CATEGORY_MEALS_ERROR:
			return {
				...state,
				categoryMealsLoading: false,
				categoryMealsError: false,
			};
		case FETCH_ALL_INDIAN_FOODS_BEGIN:
			return {
				...state,
				allIndianFoodsLoading: true,
			};
		case FETCH_ALL_INDIAN_FOODS_SUCCESS:
			return {
				...state,
				allIndianFoodsLoading: false,
				indianFoods: action.payload,
			};
		case FETCH_ALL_INDIAN_FOODS_ERROR:
			return {
				...state,
				allIndianFoodsLoading: false,
				allIndianFoodserro: false,
			};
		case FETCH_ALL_UK_FOODS_BEGIN:
			return {
				...state,
				ukFoodsLoading: true,
			};
		case FETCH_ALL_UK_FOODS_SUCCESS:
			return {
				...state,
				ukFoodsLoading: false,
				ukfoods: action.payload,
			};
		case FETCH_ALL_UK_FOODS_ERROR:
			return {
				...state,
				ukFoodsLoading: false,
				ukFoodserro: false,
			};
		case UK_FOODS_FULFIL:
			return {
				...state,
				proteinSatisfyingFoods: action.payload,
			};
		default:
			return state;
	}
};
