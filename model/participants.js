const mongoose = require("mongoose");

const ParticipantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
      enum: ["Division 1", "Division 2"],
    },
    class: {
      type: String,
      enum: [
        "BTCS",
        "TTCS-A",
        "TTCS-B",
        "TTCS-C",
        "STCS-A",
        "STCS-B",
        "STCS-AI/ML",
        "FT-1",
        "FT-2",
        "FT-3",
        "FT-4",
      ],
    },
    class_roll_no: {
      type: Number,
      required: true,
    },
    hackerrank_username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const participantsModel = mongoose.model("Participants", ParticipantsSchema);

module.exports = participantsModel;