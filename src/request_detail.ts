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

  /**
   * Get information related to user's IP
   * @returns {Promise<I_iplocate>} - A Promise that returns the information related to user's IP upon success
   *
   * @example
   * ```js
   * const ipInfo = await requestDetail.getIpInfo();
   * console.log(ipInfo); // { ip: '127.0.0.1', country: 'US', city: 'New York', ... }
   * ```
   */
  getIpInfo(): Promise<I_iplocate> {
    const ip = this.req.ip;
    return new Iplocate().getIpInfo(ip);
  }

  /**
   * Get the operating system (OS) information from the user agent
   * @returns {IOS | null} - An object representing the OS information, or null if not available
   *
   * @example
   * ```js
   * const os = requestDetail.getOs();
   * console.log(os); // { name: 'Windows', version: '10' }
   * ```
   */
  getOs(): IOS | null {
    return ua(this.req.headers["user-agent"])?.os || null;
  }

  /**
   * Get the browser information from the user agent
   * @returns {IBrowser | null} - An object representing the browser information, or null if not available
   *
   * @example
   * ```js
   * const browser = requestDetail.getBrowser();
   * console.log(browser); // { name: 'Chrome', version: '58.0.3029.110' }
   * ```
   */
  getBrowser(): IBrowser | null {
    return ua(this.req.headers["user-agent"])?.browser || null;
  }

  /**
   * Get the device information from the user agent
   * @returns {IDevice | null} - An object representing the device information, or null if not available
   *
   * @example
   * ```js
   * const device = requestDetail.getDevice();
   * console.log(device); // { type: 'desktop', vendor: 'Unknown', model: 'Unknown' }
   * ```
   */
  getDevice(): IDevice | null {
    return ua(this.req.headers["user-agent"])?.device || null;
  }

  /**
   * Get the CPU information from the user agent
   * @returns {ICPU | null} - An object representing the CPU information, or null if not available
   *
   * @example
   * ```js
   * const cpu = requestDetail.getCPU();
   * console.log(cpu); // { architecture: 'amd64' }
   * ```
   */
  getCPU(): ICPU | null {
    return ua(this.req.headers["user-agent"])?.cpu || null;
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

  /**
   * Get IP information for a specific IP address
   * @param {string} ip - The IP address
   * @returns {Promise<I_iplocate>} - A Promise that returns the information related to the specific IP address upon success
   *
   * @example
   * ```js
   * const ipInfo = await RequestDetail.getIpInfo('192.168.0.1');
   * console.log(ipInfo); // { ip: '192.168.0.1', country: 'US', city: 'New York', ... }
   * ```
   */
  static getIpInfoByIp(ip: string): Promise<I_iplocate> {
    return new Iplocate().getIpInfo(ip);
  }

  /**
   * Middleware function to attach `RequestDetail` instance to the `req` object
   * @param {Request} req - The Express request object
   * @param {Response} res - The Express response object
   * @param {NextFunction} next - The Express next function
   *
   * @example
   * ```js
   * app.use(RequestDetail.middleware);
   * ```
   */
  static middleware(req: Request, res: Response, next: NextFunction) {
    req.info = new RequestDetail(req);
    next();
  }
}

export default RequestDetail;
