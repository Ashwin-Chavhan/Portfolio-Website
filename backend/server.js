const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://127.0.0.1:5501",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Initialize PostgreSQL client
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Async route to handle form submission
app.post("/submit", async (req, res) => {
  const { name, email, phone, description } = req.body;

  try {
    // Insert data into the PostgreSQL database
    const query =
      'INSERT INTO contact_form ("Full Name", "Email", "Number", "Description") VALUES ($1, $2, $3, $4)';
    await client.query(query, [name, email, phone, description]);

    // Send an email notification asynchronously
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`,
    };

    transporter.sendMail(mailOptions, (emailErr, info) => {
      if (emailErr) {
        console.error("Error sending email:", emailErr);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });

    // Respond to the client immediately
    res.status(200).send("Form submitted successfully!");
  } catch (err) {
    console.error("Error processing form submission:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Handle OPTIONS preflight request
app.options("*", cors());

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//
//
//
//
