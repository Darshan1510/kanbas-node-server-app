import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String },
    startDate: String,
    endDate: String,
    department: { type: String },
    credit: { type: Number },
  },
  { collection: "courses" }
);
export default courseSchema;
