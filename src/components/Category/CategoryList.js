import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const CategoryList = ({ foods }) => {
	return (
		<div className="section-wrapper bg-whitesmoke">
			<div className="container">
				<div className="sc-title">Popular Alternate Dietaries In UK</div>
				<section className="sc-category grid">
					{foods.map((f, i) => {
						return (
							<Link
								to={`/meal/category/${f.title}`}
								className="category-itm flex align-center justify-center"
								style={{ flexDirection: "column" }}
								key={i}>
								<div
									className="category-itm-img flex align-center justify-center"
									style={{
										width: "200px",
										minHeight: "200px",
										flexDirection: "column",
									}}>
									<img
										src={f.image_path}
										alt={f.title}
										style={{
											objectFit: "cover",
											width: "100%",
											height: "100%",
										}}
									/>
								</div>
								<h4>{f.title}</h4>
								<p>Protien : {f.protiens}g</p>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default CategoryList;
