const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  attendees: [
    {
      name: String,
      username: String,
      email: String
    }
  ]
});

const Meeting = mongoose.model("Meeting", meetingSchema);
