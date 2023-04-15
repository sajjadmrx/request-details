import { Request, Response, NextFunction } from "express";

import I_iplocate from "./common/interfaces/iplocate.interface";
import Iplocate from "./plugins/iplocate.plugins";
import "ua-parser-js";
import ua from "./plugins/ua-parser-js.plugin";
import {
  IBrowser,
  ICPU,
  IDevice,
  IOS,
} from "./common/interfaces/ua-parser-js.interface";
declare global {
  namespace Express {
    interface Request {
      info: RequestDetail;
    }
  }
}
class RequestDetail {
  protected ip: string;
  constructor(private req: Request) {
    this.ip = req.ip;
  }

  getIpInfo(): Promise<I_iplocate> {
    const ip = this.req.ip;
    return new Iplocate().getIpInfo(ip);
  }

  getOs(): IOS {
    return ua(this.req.headers["user-agent"]).os;
  }

  getBrowser(): IBrowser {
    return ua(this.req.headers["user-agent"]).browser;
  }

  getDevice(): IDevice {
    return ua(this.req.headers["user-agent"]).device;
  }

  getCPU(): ICPU {
    return ua(this.req.headers["user-agent"]).cpu;
  }

  /**
   *  Get user agent
   * @param userAgent
   *
   * @example
   * ```js
   * fetchUserAgent(req.headers['user-agent'])
   * ```
   */
  static get fetchUserAgent() {
    return ua;
  }

  static getIpInfoByIp(ip: string): Promise<I_iplocate> {
    return new Iplocate().getIpInfo(ip);
  }

  static middleware(req: Request, res: Response, next: NextFunction) {
    req.info = new RequestDetail(req);
    next();
  }
}

export default RequestDetail;
