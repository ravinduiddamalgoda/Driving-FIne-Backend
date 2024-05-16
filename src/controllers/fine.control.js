import * as FineService from '../service/fine.service.js';

export const addFine = async (req, res) => {
    try {
        const { amount, description, fineType } = req.body;
        const fine = await FineService.addFine(amount, description, fineType);
        res.status(201).json(fine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getFine = async (req, res) => {
    try {
        const fineID = req.params.id;
        const fine = await FineService.getFine(fineID);
        if (!fine) {
            return res.status(404).json({ message: "Fine not found" });
        }
        res.status(200).json(fine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllFine = async (req, res) => {
    try {
        const fine = await FineService.getAllFine();
        res.status(200).json(fine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
