const express = require("express");
const {
  PrismaClient,
} = require("../project/src/db/node_modules/@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  const { email, password, organization } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { email, password, organization },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create an account" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
