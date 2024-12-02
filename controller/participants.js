const _ = require("lodash");
const Participants = require("../model/participants");

const createParticipants = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      division,
      standard,
      class_roll_no,
      hackerrank_username,
    } = req.body;
    //close registrations
    return res.send({
      status: 400,
      success: false,
      message: "Registrations Close",
      data: {},
    });

    if (
      _.isNil(name) ||
      _.isNil(email) ||
      _.isNil(phone) ||
      _.isNil(division) ||
      _.isNil(standard) ||
      _.isNil(class_roll_no) ||
      _.isNil(hackerrank_username)
    ) {
      return res.send({
        status: 400,
        success: false,
        message: "Mandatory fields are missing",
        data: {},
      });
    }

    const existingParticipant = await Participants.findOne({ email });

    if (!_.isNil(existingParticipant)) {
      return res.send({
        status: 400,
        success: false,
        message: "Participant already exists",
        data: {},
      });
    }

    const participants = await Participants.create({
      email,
      name,
      class_roll_no,
      class: standard,
      division,
      phone,
      hackerrank_username,
    });

    return res.send({
      status: 200,
      success: true,
      message: "Participants created successfully",
      data: participants,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: 500,
      success: false,
      message: "Error creating participants",
      data: {},
    });
  }
};

module.exports = { createParticipants };
