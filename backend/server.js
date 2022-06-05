const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express(); //Instance of express variable

app.use(express.json());

dotenv.config();
connectDB();

//express api(get request to '/' route)
app.get("/", (req, res) => {
  // callback takes request and response
  res.send("API is running"); // sending response
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//starting server(listening) on port PORT
//PORT is declared in .env using dotenv module
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
