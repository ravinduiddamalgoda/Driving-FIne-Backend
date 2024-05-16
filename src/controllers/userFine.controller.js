import * as UserFineService from '../service/userFine.service.js';

export const addUserFine = async (req, res) => {
    try {
        const { fineID, userID, amount, description, fineType } = req.body;
        const userFine = await UserFineService.addUserFine(fineID, userID, amount, description, fineType);
        res.status(201).json(userFine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserFine = async (req, res) => {
    try {
        const userFine = await UserFineService.getUserFine(req.params.id);
        if (!userFine) {
            return res.status(404).json({ message: "UserFine not found" });
        }
        res.status(200).json(userFine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllUserFines = async (req, res) => {
    try {
        const userFines = await UserFineService.getAllUserFines();
        res.status(200).json(userFines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUserFine = async (req, res) => {
    try {
        const { fineID, userID, amount, description, fineType } = req.body;
        const userFine = await UserFineService.updateUserFine(req.params.id, fineID, userID, amount, description, fineType);
        if (!userFine) {
            return res.status(404).json({ message: "UserFine not found" });
        }
        res.status(200).json(userFine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUserFine = async (req, res) => {
    try {
        const userFine = await UserFineService.deleteUserFine(req.params.id);
        if (!userFine) {
            return res.status(404).json({ message: "UserFine not found" });
        }
        res.status(200).json({ message: "UserFine deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserFinesByUserID = async (req, res) => {
    try {
        const userFines = await UserFineService.getUserFinesByUserID(req.params.userID);
        res.status(200).json(userFines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 export const UpdatePaidStatus = async (req, res) => {
    try {
        const userFine = await UserFineService.UpdatePaidStatus(req.params.id);
        if (!userFine) {
            return res.status(404).json({ message: "UserFine not found" });
        }
        res.status(200).json(userFine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
