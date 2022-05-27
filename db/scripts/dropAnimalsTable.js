import { query } from "../../../../Wednesday/w5d2_workshop-rest-express-miguel-rachel/db/index.js";

async function dropAnimalsTable() {
	const res = await query(`DROP TABLE animals;`);
	console.log("Animals table dropped");
}

dropAnimalsTable();
