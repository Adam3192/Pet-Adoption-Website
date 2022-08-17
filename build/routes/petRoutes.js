"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petsController_1 = require("../controllers/petsController");
const router = (0, express_1.Router)();
// GET /pets - renders a list of all pets
router.get('/', petsController_1.getAllPets);
// GET /pets/new - renders an add pet page
router.get('/new', petsController_1.addPetPage);
// POST /pets/new - creates new pet
router.post('/new', petsController_1.createPet);
// GET /pets/edit/:petId - render the edit pet page
router.get('/edit/:petId', petsController_1.editPetPage);
// POST /pets/edit/:petId - updates a pet
router.post('/edit/:petId', petsController_1.editPet);
// POST /pets/delete/:petId - deletes a pet
router.post('/delete/:petId', petsController_1.deletePet);
// GET /pets/:petId - render the pet requested
router.get('/:petId', petsController_1.getPetById);
exports.default = router;
