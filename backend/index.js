import express from 'express';
import cors from "cors";
import todoRoutes from "./routes/todos.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.port || 5000;

const app = express();

app.use(cors({
    origin:"https://frontend-5oip.onrender.com"
}
    
));
app.use(express.json());

app.use("/todos",todoRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port $(PORT)`);
});
