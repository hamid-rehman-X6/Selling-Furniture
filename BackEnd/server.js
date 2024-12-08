const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();
const userRoutes = require('./Routes/auth.routes');
const cookieParser = require("cookie-parser");
const { handleError } = require("./Middleware/errorHandling");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



// use the user router here
app.use('/auth/users', userRoutes);

app.use(handleError);

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});

