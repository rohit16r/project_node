
// import express, { Router } from 'express';
//  import userLogincontroller from '../controllers/loginController.js';
//  const loginin=express.Router();
//  loginin.post("/login",userLogincontroller);
 

//  export  default  loginin;


import express from 'express';
import userLogincontroller from '../controllers/loginController.js';

const loginin = express.Router();

loginin.post("/login", userLogincontroller);

export default loginin;