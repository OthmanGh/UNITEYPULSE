import Event from "../models/event.model.js";

export const getAllEvents = async (req, res) => {
  try {
    const user = req.user;

    console.log("User information:", user);

    const events = await Event.find();
    res.status(200).json({
      status: "success",
      data: events
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};

export const createEvent = async (req, res) => {
  try {
    const user = req.user;

    console.log("User information:", user);

    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: "success",
      data: newEvent
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};
