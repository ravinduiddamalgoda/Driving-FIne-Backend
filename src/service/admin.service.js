import Admin from '../models/admin.js';

export const addAdmin = async (name, password, email, province, address, adminLocation) => {
    const newAdmin = new Admin({
        name,
        password,
        email,
        province,
        address,
        adminLocation
    });
    await newAdmin.save();
    return newAdmin;
};

export const getAdmin = async (adminID) => {
    const admin = await Admin.findById(adminID);
    return admin;
};

export const getAllAdmin = async () => {
    const admins = await Admin.find();
    return admins;
};

export const updateAdmin = async (id, name, password, email, province, address, adminLocation) => {
    const admin = await Admin.findById(id);
    if (admin) {
        admin.name = name;
        admin.password = password;
        admin.email = email;
        admin.province = province;
        admin.address = address;
        admin.adminLocation = adminLocation;
        await admin.save();
        return admin;
    }
};

export const adminLogin = async (email, password) => {
    const admin = await Admin.findOne({ email, password });
    return admin;
};
