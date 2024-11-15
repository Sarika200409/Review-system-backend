import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import { createAdmin,createAlumni,createStudent,getAllUsers } from "./controllers/userControllers.js";
import { createCompany, getAllCompanies } from "./controllers/companyControllers.js";
import { createReview, getAllReviews } from "./controllers/reviewControllers.js";
import { likeReviews} from "./controllers/LikesControllers.js"
import router from "./Routes/feedbackroutes.js";


const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api/v1",router)

dotenv.config();

dbConnect();

app.post("/api/v1/admin/create",createAdmin)
app.post("/api/v1/alumni/create",createAlumni)
app.post("/api/v1/student/create",createStudent)
app.post("/api/v1/company/create",createCompany)
app.post("/api/v1/review/create",createReview)
app.post("/api/v1/like/create",likeReviews)

app.get("/api/v1/user/get",getAllUsers)
app.get("/api/v1/company/get", getAllCompanies)

app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});