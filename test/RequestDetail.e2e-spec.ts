import request from "supertest";
import express from "express";
import RequestDetail from "../src/request_detail";

// Create an Express app
const app = express();

// Middleware to add RequestDetail to the request object
app.use(RequestDetail.middleware);

// Route for testing
app.get("/", async (req, res) => {
  const ipInfo = await req.info.getIpInfo();
  res.json({ ipInfo });
});

describe("RequestDetail E2E Test", () => {
  test("GET / should return ipInfo", async () => {
    // Make a request to the Express app
    const res = await request(app).get("/");

    // Assert status code
    expect(res.status).toEqual(200);

    // Assert response body
    expect(res.body.ipInfo).toBeDefined();
    expect(res.body.ipInfo).toHaveProperty("ip");
    expect(res.body.ipInfo).toHaveProperty("country");
    expect(res.body.ipInfo).toHaveProperty("city");
  });
});
