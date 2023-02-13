import { RequestHandler } from "express";
import mysql, { FieldInfo, MysqlError } from 'mysql';
import { Pet } from "../models/Pet";

export const defaultPets: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const getAllPets: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('all-pets', { petList });
}

export const getPetById: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let foundPet: Pet | null = await Pet.findByPk(petId);

    if (foundPet) {
        res.render('pet-detail', { foundPet });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
}

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('addPet');
}

export const createPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pets');
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;

    let deletedPet = await Pet.destroy({
        where: { petId: petId }
    });

    if (deletedPet) {
        res.redirect('/pets')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find pet' });
    }
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let pet: Pet | null = await Pet.findOne({
        where: { petId: petId }
    });

    if (pet) {
        res.render('edit-pet', { foundPet: pet });
    }
    else {
        res.status(404).render('error', { message: 'pet not found' });
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let updatedPet: Pet = req.body;

    let [updated] = await Pet.update(updatedPet, {
        where: { petId: petId }
    });

    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
}

