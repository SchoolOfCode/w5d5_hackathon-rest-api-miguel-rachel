// Must use a REST API server with routes to manage requests and serve responses
//     -get
//         -SELECT * FROM animals;
//     -get with id
//         -SELECT id FROM animals
//         WHERE id= params.id;
//     -get by animal_name
//         -SELECT animal_name
//         FROM animals;
//     -push
//     -put
//     -delete

//Import pool
import pg from "pg";
import express from "express";
const animalsRouter = express.Router();

import { query } from "../db/index.js";
import { getAnimalById, getAnimalByName, getAllAnimals, createNewAnimal } from "../models/animalModels.js";

//Select all from animals

// animalsRouter.get("/", async function (req, res) {
// 	const result = await query(`SELECT * FROM animals;`);
// 	const responseObject = {
// 		success: true,
// 		message: "Displaying all animals data",
// 		payload: result.rows,
// 	};
// 	res.json(responseObject);
// });

//search by animal id
animalsRouter.get("/:id", async function (req, res) {
	const id = req.params.id;
	
	const responseObject = {
		success: true,
		message: `Displaying animals with id ${id}`,
		payload: await getAnimalById(id)
	};
	res.json(responseObject);
});

//search animal by animal_name
animalsRouter.get("/", async function (req, res) {
	const name = req.query.name;
	if (name) { 
		const responseObject = {
			success: true,
			message: `Displaying ${name}`,
			payload: await getAnimalByName(name),
		};
		res.json(responseObject);
	} else {
		const responseObject = {
			success: true,
			message: "Displaying all animals data",
			payload: await getAllAnimals(),
		};
		res.json(responseObject);
	}
});

animalsRouter.post("/", async function (req, res) {
	const body = req.body;
	const responseObject = {
		success: true,
			message: "Create new animal data",
			payload: await createNewAnimal(body),
	}
	res.json(responseObject);
})



//Check that we are communicating with the server
// await pool.connect();
// const result = await pool.query("SELECT NOW()");
// console.log(result.rows);
// await pool.end();

export default animalsRouter;
