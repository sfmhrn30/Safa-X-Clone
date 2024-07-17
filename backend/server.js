import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//midddle lyers
app.use(express.json( { limit: "5mb" })); //reg fn that runs between request and respnse
app.use(express.urlencoded({ extended: true })); //to parse from dta(urlencoded)
app.use(cookieParser());
// console.log(process.env.MONGO_URI);

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});