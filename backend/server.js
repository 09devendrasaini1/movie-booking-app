const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// important slash here
app.use("/api", require("./routes"));

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
