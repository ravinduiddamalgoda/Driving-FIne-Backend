import User from "../models/user.js";

async function findUserByEmail(email) {
    const existingUser = await User.findOne({ email });
    return existingUser;
}

async function register(name, email, password, province, address, NIC, drivingLicenceID, url) {
    const newUser = new User({
        name,
        email,
        password,
        province,
        address,
        NIC,
        drivingLicenceID,
        url
    });
    
    await newUser.save();
    const userCpy = JSON.parse(JSON.stringify(newUser));
    
    delete userCpy?.password;
    return userCpy;
}

async function login(email, password) {
    const acc = await User.findOne({ email });

    if (!acc) {
        throw new Error('User Not Found');
    }
    if (acc.password !== password) {
        throw new Error('Invalid Password');
    }
    // Directly return the user data without token generation
    const userCpy = JSON.parse(JSON.stringify(acc));
    delete userCpy?.password;

    return userCpy;
}

async function getUsers() {
    try {
        const userData = await User.find();
        return userData;
    } catch (err) {
        throw new Error('Error');
    }
}

async function getUserByNIC(NIC) {
    try {
        const userData = await User.findOne({ NIC});
        return userData;
    } catch (err) {
        throw new Error('Error');
    }
}

export default {
    findUserByEmail,
    register,
    login,
    getUsers,
    getUserByNIC
};
