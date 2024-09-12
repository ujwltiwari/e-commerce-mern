const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const registerRoute = require("./routes/(auth)/register");
const loginRoute = require("./routes/(auth)/login");
const connectDB = require("./lib/db");

connectDB();
// Middleware to parse JSON
app.use(express.json());
// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Express with pnpm!");
});

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/register", registerRoute);
app.use("/login", loginRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
