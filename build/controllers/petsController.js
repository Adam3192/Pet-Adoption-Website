"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPet = exports.editPetPage = exports.deletePet = exports.createPet = exports.addPetPage = exports.getPetById = exports.getAllPets = exports.defaultPets = void 0;
const mysql_1 = __importDefault(require("mysql"));
const Pet_1 = require("../models/Pet");
const db = mysql_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'sqluser',
    password: 'password',
    database: `petDB`
});
db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});
const defaultPets = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPets = defaultPets;
const getAllPets = async (req, res, next) => {
    let petList = await Pet_1.Pet.findAll();
    res.render('all-pets', { petList });
};
exports.getAllPets = getAllPets;
const getPetById = async (req, res, next) => {
    let petId = req.params.petId;
    let foundPet = await Pet_1.Pet.findByPk(petId);
    if (foundPet) {
        res.render('pet-detail', { foundPet });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
};
exports.getPetById = getPetById;
const addPetPage = (req, res, next) => {
    res.render('addPet');
};
exports.addPetPage = addPetPage;
const createPet = async (req, res, next) => {
    let newPet = req.body;
    await Pet_1.Pet.create(newPet);
    res.redirect('/pets');
};
exports.createPet = createPet;
const deletePet = async (req, res, next) => {
    let petId = req.params.petId;
    let deletedPet = await Pet_1.Pet.destroy({
        where: { petId: petId }
    });
    if (deletedPet) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet' });
    }
};
exports.deletePet = deletePet;
const editPetPage = async (req, res, next) => {
    let petId = req.params.petId;
    let pet = await Pet_1.Pet.findOne({
        where: { petId: petId }
    });
    if (pet) {
        res.render('edit-pet', { foundPet: pet });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let petId = req.params.petId;
    let updatedPet = req.body;
    let [updated] = await Pet_1.Pet.update(updatedPet, {
        where: { petId: petId }
    });
    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
};
exports.editPet = editPet;
