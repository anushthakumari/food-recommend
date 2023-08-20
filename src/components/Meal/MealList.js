import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
	console.log(meals);
	return (
		<div className="section-wrapper">
			<div className="container">
				<div className="sc-title">
					Most Likely Available Equivalent In Britain
				</div>
				<section className="sc-meal grid">
					{meals?.map((mealItem) => {
						// const {
						// 	idMeal: id,
						// 	strArea: area,
						// 	strCategory: category,
						// 	strMeal: meal,
						// 	strMealThumb: thumbnail,
						// } = mealItem;

						return (
							<Link
								to={`/meal/category/${mealItem.title}`}
								className="category-itm flex align-center justify-center"
								style={{ flexDirection: "column" }}
								key={mealItem.doc_id}>
								<div
									className="category-itm-img flex align-center justify-center"
									style={{
										width: "200px",
										minHeight: "200px",
										flexDirection: "column",
									}}>
									<img
										src={mealItem.image_path}
										alt={mealItem.title}
										style={{
											objectFit: "cover",
											width: "100%",
											height: "100%",
										}}
									/>
								</div>
								<h4>{mealItem.title}</h4>
								<p>Protien : {mealItem.protiens}g</p>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default MealList;
