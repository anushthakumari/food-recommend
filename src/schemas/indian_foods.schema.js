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

const indian_food_schema = {
	name: "foods_indian_foods",
	fields: {
		title: "title",
		desc: "desc",
		protien: "protien",
		image_path: "image_path",
	},
};

export default indian_food_schema;

export const insert = async (data = {}) => {
	const collRef = collection(firestore, indian_food_schema.name);

	await addDoc(collRef, {
		...data,
		created_at: serverTimestamp(),
	});
};

export const fetch_all_in_foods = async () => {
	const usersRef = collection(firestore, indian_food_schema.name);
	const { docs } = await getDocs(usersRef);

	return docs.map((d) => ({ ...d.data(), doc_id: d.id }));
};
