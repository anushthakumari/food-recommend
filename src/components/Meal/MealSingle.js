import React from "react";
import "./Meal.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Navbar from "../Header/Navbar";

const MealSingle = ({ meal }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-wrapper">
				<div className="container">
					<div className="breadcrumb bg-orange text-white">
						<ul className="flex align-center my-2">
							<li className="breadcrumb-item">
								<Link to="/" className="flex align-center">
									<AiFillHome size={22} />
								</Link>
							</li>
							<li className="flex align-center mx-1">
								<BiChevronsRight size={23} />
							</li>
							<li className="breadcrumb-item flex">
								<span to="" className="fs-15 fw-5 text-uppercase">
									{meal?.title}
								</span>
							</li>
						</ul>
					</div>

					<div className="sc-title">Meal Details</div>
					<section className="sc-details bg-white">
						<div className="details-head grid">
							<div className="details-img">
								<img src={meal?.image_path} alt="" className="img-cover" />
							</div>

							<div className="details-intro">
								<h3 className="title text-orange">{meal?.title}</h3>
								<div className="py-4">
									<div className="category flex align-center">
										<span className="text-uppercase fw-8 ls-1 my-1">
											category: &nbsp;
										</span>
										<span className="text-uppercase ls-2">
											{meal?.category}
										</span>
									</div>

									{/* <div className="source flex align-center">
									<span className="fw-7">Source: &nbsp;</span>
									<a href={meal.source}>
										{meal.source
											? (meal?.source).substring(0, 40) + "..."
											: "Not found"}
									</a>
								</div> */}
								</div>

								<div className="tags flex align-start flex-wrap">
									<h6 className="fs-16">Protiens:</h6>
									<p>{meal.protiens}g</p>
								</div>
								<div className="tags flex align-start flex-wrap">
									<h6 className="fs-16">Total Fats:</h6>
									<p>{meal.fat}g</p>
								</div>
								<div className="tags flex align-start flex-wrap">
									<h6 className="fs-16">Carbohydrates:</h6>
									<p>{meal.carbs}g</p>
								</div>
								<div className="tags flex align-start flex-wrap">
									<h6 className="fs-16">Calories:</h6>
									<p>{meal.cal}</p>
								</div>

								{/* <div className="ingredients my-5 px-3 py-3">
								<h6 className="fs-16 text-white">Ingredients</h6>
								<ul className="grid">
									{meal?.ingredients?.map((ingredient, idx) => (
										<li key={idx} className="flex align-center">
											<span className="li-dot">{idx + 1}</span>
											<span className="text-capitalize text-white fs-15">
												{ingredient}
											</span>
										</li>
									))}
								</ul>
							</div> */}
							</div>
						</div>

						{/* <div className="details-body">
						<div className="measures my-4">
							<h6 className="fs-16">Measure:</h6>
							<ul className="grid">
								{meal?.measures?.map((measure, idx) => (
									<li key={idx} className="fs-14 flex align-end">
										<span className="li-icon fs-12 text-orange">
											<FaUtensilSpoon />
										</span>
										<span className="li-text fs-15 fw-6 op-09">{measure}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="instructions my-4">
							<h6 className="fs-16">Instructions:</h6>
							<ul className="grid">
								{instructions?.map((instruction, idx) => (
									<li key={idx} className="fs-14">
										<AiOutlineCheckSquare
											size={18}
											className="text-orange li-icon"
										/>
										<span className="li-text fs-16 fw-5 op-09">
											{instruction}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div> */}
					</section>
				</div>
			</div>
		</React.Fragment>
	);
};

export default MealSingle;
