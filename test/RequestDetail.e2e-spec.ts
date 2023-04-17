import request from "supertest";
import express from "express";
import RequestDetail from "../src/request_detail";
import Request_detail from "../src/request_detail";
import { fakeHeader } from "./data/fakeHeader";
import ua from "../src/plugins/ua-parser-js.plugin";
import * as UAParser from "ua-parser-js";

// Create an Express app
const app = express();

// Middleware to add RequestDetail to the request object
app.use(RequestDetail.middleware);

// Route for testing
app.get("/", async (req, res) => {
  const ipInfo = await req.info.getIpInfo();
  res.json({ ipInfo });
});
app.get("/without-mid", (req, res) => {
  // @ts-ignore
  req = {
    ...req,
    ...fakeHeader,
  };
  const requestDetail: Request_detail = new RequestDetail(req);
  res.json({ os: requestDetail.getOs() });
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

  test("should return os info", async () => {
    const res = await request(app).get("/without-mid");
    expect(res.status).toEqual(200);
    expect(res.body.os).toEqual({
      name: "Windows",
      version: "10",
    });
  });
  describe("fetchUserAgent", () => {
    it("should return the ua function", () => {
      const result = RequestDetail.fetchUserAgent;
      expect(result).toEqual(ua);
    });
    it("should correctly parse OS name from user agent string", () => {
      const userAgent =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36";
      jest.mock("ua-parser-js", () => {
        return jest.fn(() => ({
          getUA: jest.fn(() => userAgent),
        }));
      });

      const result = RequestDetail.fetchUserAgent;
      expect(result(userAgent).os.name).toBe("Windows");
    });
  });
});
