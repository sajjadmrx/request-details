import RequestDetail from "../src";
import Iplocate from "../src/plugins/iplocate.plugins";
import I_iplocate from "../src/common/interfaces/iplocate.interface";

jest.mock("../src/plugins/iplocate.plugins");
jest.mock("../src/plugins/ua-parser-js.plugin");

describe("RequestDetail", () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = {
      ip: "127.0.0.1",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    };
    res = {};
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getIpInfo", () => {
    it("should call Iplocate.getIpInfo with the correct IP and return the result", async () => {
      const expectedIpInfo: I_iplocate = {
        country: "US",
        city: "New York",
        asn: "",
        ip: "",
        country_code: "",
        continent: "",
        org: "",
        latitude: 1,
        time_zone: "",
        longitude: 1,
        postal_code: "",
        subdivision: null,
        subdivision_code: null,
      };
      jest
        .spyOn(Iplocate.prototype, "getIpInfo")
        .mockImplementation(async () => expectedIpInfo);

      const requestDetail = new RequestDetail(req);
      const ipInfo = await requestDetail.getIpInfo();
      expect(Iplocate.prototype.getIpInfo).toHaveBeenCalledWith("127.0.0.1");
      expect(ipInfo).toEqual(expectedIpInfo);
    });
  });

  describe("constructor", () => {
    it("should set the correct initial values", () => {
      const requestDetail = new RequestDetail(req);
      expect(requestDetail["ip"]).toEqual("127.0.0.1");
      expect(requestDetail["req"]).toEqual(req);
    });
  });

  describe("getOs", () => {
    it("should call ua with the correct user agent and return the null", () => {
      const requestDetail = new RequestDetail(req);
      const os = requestDetail.getOs();
      expect(os).toEqual(null);
    });
  });

  describe("middleware", () => {
    it("should create a new RequestDetail instance and set it on the request object", () => {
      const requestDetail = new RequestDetail(req);
      RequestDetail.middleware(req, res, next);
      expect(req.info).toEqual(requestDetail);
      expect(next).toHaveBeenCalled();
    });
  });
});
