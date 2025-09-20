import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js";



dotenv.config();
const app = express()
const PORT = process.env.PORT;


app.use(helmet()); //secure middleware  (http headers)
app.use(morgan("dev")); //logs the requests to the console 
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes); //gets products from database, from router via productRoute
    
app.listen(3000, () => {
    console.log("Running from port" + PORT)
}) 