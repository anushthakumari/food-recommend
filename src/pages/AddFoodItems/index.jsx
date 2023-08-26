import React from "react";

import { TextField, Button } from "@mui/material";

import { insert } from "../../schemas/indian_foods.schema";
import { insert_uk_foods } from "../../schemas/uk_foods.schema";

const AddItems = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const title = e.currentTarget.title.value;
			const desc = e.currentTarget.desc.value;
			const protiens = e.currentTarget.protiens.value;
			const carbs = e.currentTarget.carbs.value;
			const fat = e.currentTarget.fat.value;
			const cal = e.currentTarget.cal.value;
			const image_path = e.currentTarget.image.value;

			await insert({ title, desc, protiens, image_path, fat, carbs, cal });
			alert("success!");
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	const handleSubmitUK = async (e) => {
		e.preventDefault();
		try {
			const title = e.currentTarget.title.value;
			const desc = e.currentTarget.desc.value;
			const protiens = e.currentTarget.protiens.value;
			const carbs = e.currentTarget.carbs.value;
			const fat = e.currentTarget.fat.value;
			const cal = e.currentTarget.cal.value;
			const indian_food_id = e.currentTarget.indianfood.value;
			const image_path = e.currentTarget.image.value;

			await insert_uk_foods({
				title,
				desc,
				protiens,
				fat,
				carbs,
				cal,
				indian_food_id,
				image_path,
			});
			alert("success!");
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField name="title" label="Title" required />
				<TextField name="desc" label="Description" required />
				<TextField name="protiens" label="Protien (gm)" required />
				<TextField name="fat" label="Fat (gm)" required />
				<TextField name="carbs" label="Carbs (gm)" required />
				<TextField name="cal" label="Cal" required />
				<TextField name="image" label="Image Path" required />
				<Button type="submit">Submit</Button>
			</form>
			<form onSubmit={handleSubmitUK}>
				<h1>uk foods</h1>
				<TextField name="title" label="Title" required />
				<TextField name="desc" label="Description" required />
				<TextField name="protiens" label="Protien (gm)" required />
				<TextField name="fat" label="Fat (gm)" required />
				<TextField name="carbs" label="Carbs (gm)" required />
				<TextField name="cal" label="Cal" required />
				<TextField name="image" label="Image Path" required />
				<TextField name="indianfood" label="Indian Food Doc Id" required />
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default AddItems;
