import mongoose, { Schema, Document } from "mongoose";

export interface Employee extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    role: "Admin" | "staff";
    createdAt: Date;
    updatedAt: Date;
}

const employeeSchema = new Schema<Employee>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        role: { type: String, enum: ["Admin", "Staff"], required: true }
    },
    { timestamps: true }
)

const employeeModel = mongoose.models.Employee || mongoose.model<Employee>("Employee", employeeSchema)

export default employeeModel