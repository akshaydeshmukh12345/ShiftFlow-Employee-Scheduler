const bcrypt = require("bcryptjs");
const { createUser, findUserByEmail } = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    findUserByEmail(email, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email already registered",
        });
      }

      bcrypt.hash(password, 10).then((hashedPassword) => {
        createUser(name, email, hashedPassword, (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          return res.status(201).json({
            success: true,
            message: "User registered successfully",
          });
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  console.log("===== LOGIN REQUEST RECEIVED =====");
  console.log("Body:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Missing email or password");
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  findUserByEmail(email, async (err, result) => {
    console.log("Database callback reached");

    if (err) {
      console.log("Database Error:", err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    console.log("Result:", result);

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const user = result[0];

    console.log("Comparing password...");

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    console.log("JWT_SECRET:", process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
  return res.status(500).json({
    success: false,
    message: "JWT_SECRET is missing from .env",
  });
}

const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

    console.log("Sending Response");

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};