import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routes/PortfolioRoute.js';


//dotenv configuration
dotenv.config();


//rest object
const app = express();

//midlewares
app.use(cors())
app.use(express.json());



//routes
app.use("/api/v1/portfolio", router)


//port
const PORT =process.env.PORT || 9000



//listen
app.listen(PORT, () => {
    console.log(`Server Running On PORT ${PORT}`);
});