import {
	collection,
	getDoc,
	doc,
	getDocs,
	query,
	where,
	addDoc,
	setDoc,
	and,
	or,
	serverTimestamp,
} from "firebase/firestore";

import { firestore } from "../configs/firebase.config";

const uk_food_schema = {
	name: "uk_indian_foods",
	fields: {
		title: "title",
		desc: "desc",
		protien: "protien",
		image_path: "image_path",
		indian_food_id: "indian_food_id",
	},
};

export default uk_food_schema;

export const insert_uk_foods = async (data = {}) => {
	const collRef = collection(firestore, uk_food_schema.name);

	await addDoc(collRef, {
		...data,
		created_at: serverTimestamp(),
	});
};

export const fetch_all_uk_foods = async () => {
	const usersRef = collection(firestore, uk_food_schema.name);
	const { docs } = await getDocs(usersRef);

	return docs.map((d) => ({ ...d.data(), doc_id: d.id }));
};
