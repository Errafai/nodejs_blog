require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");


const app = express();
const PORT = 5001 || process.env.PORT;

app.use(express.static("public"));

//template engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");




app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
