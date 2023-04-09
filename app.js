const http = require("http");

const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product", (req, res, next) => {
  console.log("in the middleware2");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);  
  res.redirect('/')
});

app.use("/", (req, res, next) => {
  console.log("in the middleware2");
  res.send("<h1>Hello from saharsa</h1>");
});

app.listen(3000);
