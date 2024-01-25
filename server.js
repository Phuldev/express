const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const url =
  "mongodb+srv://dwashkarma:dwashkarma@cluster0.dzezum1.mongodb.net/Hey?retryWrites=true&w=majority";

const useRouter = require("./src/routes/userRouter");

mongoose.connect(url).then(
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
);

app.use("/api/v1/users", useRouter);
