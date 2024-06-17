const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {app , server} = require("./socket/socket.js")
const authRoute = require("./routes/authroutes")
const messageRoute = require("./routes/messageroutes")
const userRoute = require("./routes/userroutes")
const connectToMongoDB = require("./db/connectToMongoDB")
const path = require("path")
const cors = require("cors");

const PORT = process.env.PORT || 5000;

dotenv.config();
const rootDir = process.cwd();
// __dirname = path.resolve()
const corsOptions = {
  origin: "https://chat-app-2-fm6h.onrender.com", // Update this with your deployed frontend URL
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoute);
app.use("/api/message" , messageRoute);
app.use("/api/users" , userRoute);

app.use(express.static(path.join(rootDir, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
connectToMongoDB();
console.log(`Server is running on port number ${PORT}`)
});
