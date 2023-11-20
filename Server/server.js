const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: http://localhost:${process.env.PORT}/`);
});