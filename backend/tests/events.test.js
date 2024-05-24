import request from "supertest";
import express from "express";
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/event.controller.js";
import Event from "../models/event.model.js";

const app = express();
app.use(express.json());

app.get("/events", getAllEvents);
app.post("/events", createEvent);
app.put("/events/:id", updateEvent);
app.delete("/events/:id", deleteEvent);

app.use((req, res, next) => {
  req.user = { id: "testUserId" };
  next();
});

jest.mock("../models/event.model");

describe("Event Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should get all events", async () => {
    Event.find.mockResolvedValue([{ id: 1, name: "Test Event" }]);

    const response = await request(app).get("/events");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.data).toEqual([{ id: 1, name: "Test Event" }]);
  });

  test("should create an event", async () => {
    Event.create.mockResolvedValue({ id: 1, name: "Test Event" });

    const response = await request(app)
      .post("/events")
      .send({ name: "Test Event" });

    expect(response.status).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.data).toEqual({ id: 1, name: "Test Event" });
  });

  test("should update an event", async () => {
    Event.findByIdAndUpdate.mockResolvedValue({ id: 1, name: "Updated Event" });

    const response = await request(app)
      .put("/events/1")
      .send({ name: "Updated Event" });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.data).toEqual({ id: 1, name: "Updated Event" });
  });

  test("should delete an event", async () => {
    Event.findByIdAndDelete.mockResolvedValue(true);

    const response = await request(app).delete("/events/1");
    expect(response.status).toBe(204);
  });

  test("should handle event not found for update", async () => {
    Event.findByIdAndUpdate.mockResolvedValue(null);

    const response = await request(app)
      .put("/events/1")
      .send({ name: "Updated Event" });

    expect(response.status).toBe(404);
    expect(response.body.status).toBe("error");
    expect(response.body.message).toBe("Event not found");
  });

  test("should handle event not found for delete", async () => {
    Event.findByIdAndDelete.mockResolvedValue(null);

    const response = await request(app).delete("/events/1");
    expect(response.status).toBe(404);
    expect(response.body.status).toBe("error");
    expect(response.body.message).toBe("Event not found");
  });
});
