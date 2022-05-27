import pg from "pg";

import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS animals (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, animal_name TEXT, conservation_status TEXT, approx_population INT, region TEXT, weight VARCHAR(30), image VARCHAR(2083));`;

async function createAnimalsTable() {
	const res = await query(sqlString);
	console.log(await res.command);
}

createAnimalsTable();
