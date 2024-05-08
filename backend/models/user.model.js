import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import Company from "./company.model.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    username: {
      type: String,
      required: [true, "username is required"],
      unique: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Provide a valid email"]
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false
    },

    confirmPassword: {
      type: String,
      required: [true, "Confirm password is required"],
      validate: {
        validator: function(el) {
          return el === this.password;
        },
        message: "Passwords must match"
      }
    },

    profilePicture: {
      type: String,
      default: "annonymous.png"
    },

    role: {
      type: String,
      enum: ["employee", "owner", "manager"],
      default: "employee"
    },

    department: {
      type: String
    },

    companyPolicies: [String],
    goalsAndObjectives: [String],

    projects: [
      {
        name: String,
        department: String
      }
    ],

    manager: {
      name: String,
      username: String,
      email: String
    },

    feedback: [
      {
        type: String,
        date: { type: Date, default: Date.now },
        anonymous: { type: Boolean, default: true }
      }
    ],

    company: {
      type: Company.schema,
      required: function() {
        return this.role === "owner";
      }
    },

    passwordResetToken: String,
    passwordResetExpires: Date
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.generatePasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 5 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
