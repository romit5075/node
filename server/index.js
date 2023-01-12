import  express  from "express";
import connectDB from "./config/db.js";
import router from "./routes/autheroutes.js";
const app = express();

const PORT=process.env.PORT || 9000;
connectDB();

// API
app.get('/',(req,res)=>{
    res.send('Backend is Runing...');
})

// route
// app.use(authRoutes);
app.use(express.json());
app.use(router);

// server define
app.listen(PORT,()=>{
    console.log(`API Runing on http://localhost:${PORT}`);
} )


