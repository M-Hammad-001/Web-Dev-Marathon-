import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "localhost@56029",
  database: "tutor",
});

// Create users table if not exists
await db.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role ENUM('student', 'tutor')
  )
`);

// Register Route
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    await db.execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, password, role]);
    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Email already exists or server error" });
  }
});

// Login Route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(401).json({ message: "User not found" });

    const user = rows[0];
    if (user.password !== password) return res.status(401).json({ message: "Invalid password" });

    res.json({ id: user.id, name: user.name, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

app.listen(8000, () => console.log(`Server running on http://localhost:8000`));