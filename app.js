const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

const products = require("./routes/products");
const home = require("./routes/home");

app.use(express.json());

// app.use(cors({
//     origin: "*",
//     methods: ["GET"]
// }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next();
});

app.use("/api/products" ,products);
app.use("/", home);

const uri = 'mongodb+srv://emreyildirim:Emreyildirim123@cluster0.xyhhjga.mongodb.net/?retryWrites=true&w=majority';

// Mongoose bağlantısını yapılandırma
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas\'a başarıyla bağlandı!'))
  .catch(err => console.error(err));    

app.listen(3000, () => {
    console.log("listening on port 3000");
});