import mongoose, { Schema, models, model } from "mongoose";

export interface IRegistration {
  name: string;
  email: string;
  phone: string;
  // city: string;
  type: string;
  company?: string;
  message?: string;
  createdAt?: Date;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [10, "Phone must be at least 10 digits"],
    },
    // city: {
    //   type: String,
    //   required: [true, "City selection is required"],
    //   trim: true,
    // },
    type: {
      type: String,
      required: [true, "Registration type is required"],
      enum: ["visitor", "exhibitor", "partner", "media"],
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
    collection: "registrations",
  }
);

// Prevent model recompilation during hot-reload in development
const Registration =
  models.Registration ||
  model<IRegistration>("Registration", RegistrationSchema);

export default Registration;
