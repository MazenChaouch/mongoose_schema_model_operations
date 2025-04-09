const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  zip: Number,
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 10, minlength: 5 },
  lastName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: (email) => email.length !== 5,
      message: (err) => "email must not be 5 characteres",
    },
  },
  age: { type: Number, required: true, min: 18, max: 80 },
  role: { type: String, enum: ["admin", "user"] },
  hobbies: [String],
  address: addressSchema,
  createdAt: { type: Date, default: new Date(), immutable: true },
  UpdatedAt: { type: Date, default: new Date() },
});

const user = mongoose.model("users", userSchema);

module.exports = user;
