const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {app , server} = require("./socket/socket.js")
const authRoute = require("./routes/authroutes")
const messageRoute = require("./routes/messageroutes")
const userRoute = require("./routes/userroutes")
const connectToMongoDB = require("./db/connectToMongoDB")

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoute);
app.use("/api/message" , messageRoute);
app.use("/api/users" , userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

server.listen(PORT, () => {
connectToMongoDB();
console.log(`Server is running on port number ${PORT}`)
});
