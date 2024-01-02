import express, { request } from 'express';
import user from '../models/user.js';
import fs from "fs"
import {createError} from '../utils/error.js';
import { createUser, deleteUser, getUser, getSingleUser, updateUser,
    getEducationDetails,showImages,saveFilePathInDb} from '../controllers/user.js';
const router = express.Router();

import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('in multer'+" "+req.body.email)
      let fileUploadPath = `uploads/${req.body.email}`
      const emailID = req.body.email;
      saveFilePathInDb(emailID,file.originalname)
      if (!fs.existsSync(fileUploadPath)) {
        fs.mkdirSync(fileUploadPath);
      }
      cb(null, fileUploadPath)
    },
    filename: (req, file, cb) => {
      console.log('in filename'+file.originalname)
      cb(null, Date.now() + "-" + file.originalname)
    },
  })

const uploadStorage = multer({ storage: storage })


//CREATE
router.post("/", createUser);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET ONE
router.get("/:id",getSingleUser) ;
//GET ALL
router.get("/", getUser) ;
//SUBMIT EDUCATION DETIALS 
router.post("/eduDetails",getEducationDetails)


router.get("/images",showImages)

//UPLOAD DOCUMENTS
router.post("/uploadDocments",uploadStorage.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});


export default router;