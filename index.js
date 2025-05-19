const express =require('express');
const db=require("./config/Database");

require('dotenv').config();
db();
const app = express();
app.use(express.json());

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/userRoutes'));



const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))