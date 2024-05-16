import UserFine from '../models/UserFine.js';

export const addUserFine = async (fineID, userID, amount, description, fineType) => {
    const newUserFine = new UserFine({
        fineID,
        userID,
        amount,
        description,
        fineType
    });
    await newUserFine.save();
    return newUserFine;
};

export const getUserFine = async (id) => {
    const userFine = await UserFine.findById(id);
    return userFine;
};

export const getAllUserFines = async () => {
    const userFines = await UserFine.find();
    return userFines;
};

export const updateUserFine = async (id, fineID, userID, amount, description, fineType) => {
    const userFine = await UserFine.findById(id);
    if (userFine) {
        userFine.fineID = fineID;
        userFine.userID = userID;
        userFine.amount = amount;
        userFine.description = description;
        userFine.fineType = fineType;
        await userFine.save();
        return userFine;
    }
    return null;
};

export const deleteUserFine = async (id) => {
    const result = await UserFine.findByIdAndDelete(id);
    return result;
};


export const getUserFinesByUserID = async (userID) => {
    const userFines = await UserFine.find({ userID });
    return userFines;
}

export const UpdatePaidStatus = async (id) => {
    const userFine = await UserFine.findById(id);
    if (userFine) {
        userFine.isPaid = true;
        await userFine.save();
        return userFine;
    }   
    return null;
}