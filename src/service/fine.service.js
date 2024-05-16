import Fine from '../models/fine.js';

async function findID(accNo) {
    const existingAccount = await Fine.findOne({ fineID: accNo });
    return !existingAccount;
}

function generateID() {
    let chars = '0123456789'; // Characters to use for ID
    let accID = 'FN';
    for (let i = 0; i < 8; i++) {
        accID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(accID);
    // Check if ID has already been generated
    const existingAccNO = findID(accID);

    if (!existingAccNO) {
        return generateID();
    } else {
        let fAcc = accID.toString();
        return fAcc;
    }
}

export const addFine = async (amount, description, fineType) => {
    const fineID = generateID();
    const newFine = new Fine({
        fineID,
        amount,
        description,
        fineType
    });
    await newFine.save();
    return newFine;
};

export const getFine = async (fineID) => {
    const fine = await Fine.findOne({ fineID });
    return fine;
};

export const getAllFine = async () => {
    const fines = await Fine.find();
    return fines;
};
