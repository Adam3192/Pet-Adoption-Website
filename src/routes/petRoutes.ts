import { Router } from 'express';
import { getAllPets, addPetPage, createPet, deletePet, getPetById, editPet, editPetPage } from '../controllers/petsController';

const router = Router();

// GET /pets - renders a list of all pets
router.get('/', getAllPets);

// GET /pets/new - renders an add pet page
router.get('/new', addPetPage);

// POST /pets/new - creates new pet
router.post('/new', createPet);

// GET /pets/edit/:petId - render the edit pet page
router.get('/edit/:petId', editPetPage);

// POST /pets/edit/:petId - updates a pet
router.post('/edit/:petId', editPet);

// POST /pets/delete/:petId - deletes a pet
router.post('/delete/:petId', deletePet);

// GET /pets/:petId - render the pet requested
router.get('/:petId', getPetById);

export default router;
