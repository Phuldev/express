const express = require("express");
const app = express();
const port = 5000;

const useRouter = require("./src/routes/userRouter")

app.use("/api/v1/users",useRouter);

app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`);});