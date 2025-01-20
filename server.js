import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

dotenv.config();

const app = express();
const port = process.env.PORT || 5003;

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(cors());
app.use(express.json());

// Sign-up endpoint
app.post("/api/signup", async (req, res) => {
  const { username, familyName, email, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (username, familyName, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, familyName, email, password]
    );

    res
      .status(201)
      .json({ message: "User created successfully!", user: result.rows[0] });
  } catch (err) {
    console.error("Error during sign-up:", err);
    res.status(500).json({ error: "Error creating user" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      const user = result.rows[0];

      if (password === user.password) {
        res.status(200).json({
          message: "Login successful!",
          user: { id: user.id, email: user.email },
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Error during login" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
