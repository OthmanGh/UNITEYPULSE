import request from "supertest";
import express from "express";
import {
  getAllTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction
} from "../controllers/transaction.controller.js";
import Transaction from "../models/transaction.model.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.user = { _id: "testUserId" };
  next();
});

app.get("/transactions", getAllTransactions);
app.post("/transactions", createTransaction);
app.delete("/transactions/:id", deleteTransaction);
app.patch("/transactions/:id", updateTransaction);

jest.mock("../models/transaction.model");

describe("Transaction Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllTransactions", () => {
    test("should get all transactions", async () => {
      const transactions = [{ id: 1, amount: 100 }];

      Transaction.find.mockResolvedValue(transactions);

      const response = await request(app).get("/transactions");

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("success");
      expect(response.body.data.transactions).toEqual(transactions);
    });

    test("should handle errors", async () => {
      const error = new Error("Database error");
      Transaction.find.mockRejectedValue(error);

      const response = await request(app).get("/transactions");

      expect(response.status).toBe(400);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe(error.message);
    });
  });

  describe("createTransaction", () => {
    test("should create a new transaction", async () => {
      const newTransaction = { id: 1, amount: 100 };

      Transaction.create.mockResolvedValue(newTransaction);

      const response = await request(app)
        .post("/transactions")
        .send({ amount: 100 });

      expect(response.status).toBe(201);
      expect(response.body.status).toBe("success");
      expect(response.body.data.transaction).toEqual(newTransaction);
    });

    test("should handle errors", async () => {
      const error = new Error("Database error");
      Transaction.create.mockRejectedValue(error);

      const response = await request(app)
        .post("/transactions")
        .send({ amount: 100 });

      expect(response.status).toBe(400);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe(error.message);
    });
  });

  describe("deleteTransaction", () => {
    test("should delete a transaction", async () => {
      const transactionId = "transactionId";

      Transaction.findOneAndDelete.mockResolvedValue({ id: transactionId });

      const response = await request(app).delete(
        `/transactions/${transactionId}`
      );

      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
    });

    test("should handle not found error", async () => {
      const transactionId = "nonExistingTransactionId";

      Transaction.findOneAndDelete.mockResolvedValue(null);

      const response = await request(app).delete(
        `/transactions/${transactionId}`
      );

      expect(response.status).toBe(404);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe("Transaction not found");
    });

    test("should handle errors", async () => {
      const transactionId = "transactionId";
      const error = new Error("Database error");

      Transaction.findOneAndDelete.mockRejectedValue(error);

      const response = await request(app).delete(
        `/transactions/${transactionId}`
      );

      expect(response.status).toBe(400);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe(error.message);
    });
  });

  describe("updateTransaction", () => {
    test("should update a transaction", async () => {
      const transactionId = "transactionId";
      const updatedTransaction = { id: transactionId, amount: 200 };

      Transaction.findOneAndUpdate.mockResolvedValue(updatedTransaction);

      const response = await request(app)
        .patch(`/transactions/${transactionId}`)
        .send({ amount: 200 });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("success");
      expect(response.body.data.transaction).toEqual(updatedTransaction);
    });

    test("should handle not found error", async () => {
      const transactionId = "nonExistingTransactionId";

      Transaction.findOneAndUpdate.mockResolvedValue(null);

      const response = await request(app)
        .patch(`/transactions/${transactionId}`)
        .send({ amount: 200 });

      expect(response.status).toBe(404);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe("Transaction not found");
    });

    test("should handle errors", async () => {
      const transactionId = "transactionId";
      const error = new Error("Database error");

      Transaction.findOneAndUpdate.mockRejectedValue(error);

      const response = await request(app)
        .patch(`/transactions/${transactionId}`)
        .send({ amount: 200 });

      expect(response.status).toBe(400);
      expect(response.body.status).toBe("fail");
      expect(response.body.message).toBe(error.message);
    });
  });
});
