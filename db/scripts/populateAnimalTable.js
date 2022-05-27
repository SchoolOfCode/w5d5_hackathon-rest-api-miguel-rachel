import { query } from "../index.js";

import { animalsData } from "../../libs/data.js";

const animals = animalsData;

async function populateAnimalTable() {
    for(let i=0; i < animals.length; i++) {
        const res = await query(`INSERT INTO animals (animal_name, conservation_status, approx_population, region, weight, image) VALUES ($1, $2, $3, $4, $5, $6);`, 
        [animals[i].animal_name, animals[i].conservation_status, animals[i].approx_population, animals[i].region, animals[i].weight, animals[i].image]);
        console.log(res.command);
    }
}

populateAnimalTable();
