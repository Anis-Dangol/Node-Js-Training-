import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* 
app.get("/", (req, res) => {
    res.send("server is ready");
});
console.log(process.env.MONGO_URI);
*/

app.use(express.json()); // middleware that allows us to accept json data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


