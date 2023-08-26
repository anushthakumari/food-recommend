import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const CategoryList = ({ foods, title = "Popular Meals" }) => {
	return (
		<div className="section-wrapper">
			<div className="container">
				<div className="sc-title">{title}</div>
				<section className="sc-meal">
					{foods?.map((mealItem) => {
						return (
							<Link
								to={`/meal/${mealItem.doc_id}`}
								className="meal-itm align-center justify-center"
								key={mealItem.doc_id}>
								<div className="meal-itm-img">
									<img src={mealItem.image_path} alt={mealItem.title} />
									<div className="meal-itm-cat bg-orange text-orange fw-6">
										{mealItem.category}
									</div>
								</div>

								<div className="meal-itm-body">
									<div className="meal-itm-body-info flex flex-column">
										<div className="meal fw-15 fw-7 op-09">
											{mealItem.title}
										</div>
										<div className="area fs-14 ls-1 fw-5">
											Protien :{mealItem.protiens}g
										</div>

										<div className="area fs-14 ls-1 fw-5">
											Total Fats :{mealItem.fat}g
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default CategoryList;
