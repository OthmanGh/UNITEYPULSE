const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  createdBy: {
    name: String,
    username: String,
    email: String
  }
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
