import React from "react";
import "./creator.scss";
import { useMealContext } from "../../context/mealContext";
import PopularList from "../../components/Category/CategoryList";
import HeaderCalculator from "../../components/HeaderCalculator/Header";

const Calculator = () => {
	const { proteinSatisfyingFoods } = useMealContext();

	return (
		<React.Fragment>
			<HeaderCalculator />
			<main className="main-content">
				{proteinSatisfyingFoods ? (
					<PopularList
						title={proteinSatisfyingFoods.title}
						foods={proteinSatisfyingFoods.meals}
					/>
				) : null}
			</main>
		</React.Fragment>
	);
};

export default Calculator;
