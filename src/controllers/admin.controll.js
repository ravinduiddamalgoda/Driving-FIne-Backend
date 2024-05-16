import * as AdminServices from '../service/admin.service.js';

export const addAdmin = async (req, res) => {
    try {
        const { name, email, password, province, address, adminLocation } = req.body;
        const admin = await AdminServices.addAdmin(name, email, password, province, address, adminLocation);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminServices.adminLogin(email, password);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdmin = async (req, res) => {
    try {
        const adminID = req.params.id;
        const admin = await AdminServices.getAdmin(adminID);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
