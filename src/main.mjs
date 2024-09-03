import axios from "axios";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Get the file path of the current module
const __dirname = path.dirname(__filename); // Get the directory name

// Creating express app
const app = express();

// setting up PORT
dotenv.config();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.APIKEY;

app.set("views", path.join(__dirname, "views")); // Use __dirname to set the correct path

// test call
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.harvardartmuseums.org/Image?color=color&page=1&size=100&apikey=${apiKey}`
    );
    res.render("index.ejs", { data: result.data });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

// next pages
// app.post(`/${}`)

// app listening o port : 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${3000}`);
});
