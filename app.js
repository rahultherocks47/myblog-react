import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
//----------------For Deployment---------------------

//----------------For Deployment---------------------

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

const port = process.env.PORT || 5000;
//----------------For Deployment---------------------
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"));
}
//----------------For Deployment---------------------

mongoose
.connect("mongodb+srv://rahultherocks48:123$rocK@cluster0.nvzxf.mongodb.net/sample_restaurants?retryWrites=true&w=majority")
.then(() => app.listen(port))
.then((console.log("DB Connected and running on localhost at 5000")))
.catch((err)=> console.log(err));