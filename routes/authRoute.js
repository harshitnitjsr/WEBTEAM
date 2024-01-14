import express from "express"
import { registerController , addmarks, result, addsubjects, dashboard, studentdetails, searchstudent, getStudentSubjects, updatestudent } from "../controllers/authControllers.js";

// import multer from "multer";
// import path from "path";
// import studentModel from "../models/studentModel.js";


 
const app = express();
const router=express.Router()
app.use(express.json());
// app.use("/files", express.static("files"));
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });


// const upload = multer({ storage: storage });


// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });
// app.get("/get-files", async (req, res) => {
//   try {
//     PdfSchema.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {}
// });

router.post('/registerstudent',registerController)
router.post('/addmarks',addmarks)
router.get('/result/:registrationNumber',result)
router.post('/addsubjects',addsubjects)
router.get('/dashboard',dashboard)
router.get('/student-details/:registrationNumber',studentdetails)
router.get('/search-students',searchstudent)
router.get('/student-subjects/:registrationNumber',getStudentSubjects)
router.put('/update/:registrationNumber',updatestudent)
//router.post('/upload-assignment',upload.single('assignmentFile'),uploadassign)


export default router