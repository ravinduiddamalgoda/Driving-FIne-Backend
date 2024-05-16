import UserService from "../service/user.service.js";
import User from "../models/user.js";
// import nodemailer 
import nodemailer from 'nodemailer';

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const CurrentUser = async (req ,res) => {
    const curntUser  = req.user;
    //console.log(currntUser);

    try{
        
        if(!curntUser){
            return res.status(400).send({ err: 'User Not Logged In'});
        }

        const userDoc = await UserService.findUserByEmail(curntUser.email);
        const user = userDoc?.toJSON();
    
        delete user?.password; //detele user paaword befor e send it to the frontend
        res.status(200).json(user);

    }catch(err){
        res.status(400).send({ err: err });

    }

}


export const UpdateUser = async( req , res) => {
  const id = req.params['userID'];

  try {
    const {name, province , address , NIC , drivingLicenceID} = req.body;
    const updatedData = await User.findByIdAndUpdate( id , {name, province , address , NIC , drivingLicenceID});
    res.json(updatedData);

  }catch(err){

    res.status(400).send({ err: err.message });
  }

}



export const RegisterUser = async (req, res) => {
  try {
    console.log("Register User");
    const { name, email, password , province , address , NIC , drivingLicenceID } = req.body;
    let url;
    if(!req.file){
        return res.status(400).json({message: 'Please upload an image'});
    }
    else{
          url = req.file.path;
    }
    const existingUser = await UserService.findUserByEmail(email);
  
    if (existingUser) {
      return res.status(400).send({
        err: "User already Exits",
      });
    }

    const user = await UserService.register(name , email, password , province , address , NIC , drivingLicenceID , url );
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const LoggedUser =  await UserService.login(email , password);

    res.status(200).send(LoggedUser);

  } catch (err) {
        res.status(400).send({ err: err.message})

  }
};


export const getAllUsers = async (req , res) => {

    try{
       const data = await UserService.getUsers(); 
       res.status(200).send(data);
    }catch(err){
      res.status(400).send({ err: err.message});
    }

}



export const getUserByEmail = async (req , res) =>{
  const email = req.params['email'];
  try{
    const data =  await UserService.findUserByEmail(email);
    const userCpy =  JSON.parse(JSON.stringify(data));
    delete userCpy?.password
    res.status(200).send(userCpy);
  }catch (err){
    res.status(400),send({err: err.message});
  }
}


export const searchByNIC = async (req, res) => {
  try {
    const { nic } = req.params;
    const user = await User.findOne({ NIC: nic });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

