import { Request, Response, NextFunction } from "express";

import I_iplocate from "./common/interfaces/iplocate.interface";
import Iplocate from "./plugins/iplocate.plugins";
import "ua-parser-js";
import ua from "./plugins/ua-parser-js.plugin";
import { Browser } from "./common/interfaces/browser.interface";
import { Device } from "./common/interfaces/Device.interface";
import { CPU } from "./common/interfaces/cpu.interface";
import { OS } from "./common/interfaces/os.interface";
import { Options } from "./common/interfaces/options.interface";

/**
 * Declare global namespace for Express module.
 *
 * @namespace Express
 *
 * @typedef {object} Request - Represents the incoming HTTP request object in Express.
 *
 * @property {RequestDetail} info - Custom property added to the Express Request object for storing request details.
 *
 * @memberof Express
 * @alias Express.Request
 */
declare global {
  namespace Express {
    interface Request {
      info: RequestDetail;
    }
  }
}

/**
 * Represents a class for handling request details in an Express application.
 * @class
 */
class RequestDetail {
  protected ip: string;
  private options: Options;

  /**
   * Creates an instance of the `RequestDetails` class.
   *
   * @constructor
   * @param {Request} req - The Express request object.
   * @param {Options} options - The options to configure the `RequestDetails` instance.
   */
  constructor(private req: Request, options: Options = {}) {
    this.ip = req.ip;
    this.options = options;
  }

  /**
   * Get information related to user's IP
   * @returns {Promise<I_iplocate>} - A Promise that returns the information related to user's IP upon success
   *
   * @example
   *
   * const ipInfo = await requestDetail.getIpInfo();
   * console.log(ipInfo); // { ip: '127.0.0.1', country: 'US', city: 'New York', ... }
   *
   */
  getIpInfo(): Promise<I_iplocate> {
    const ip = this.req.ip;
    return new Iplocate(this.options.iPlocateToken).getIpInfo(ip);
  }

  /**
   * Sets the options for the `RequestDetails` instance.
   *
   * @method
   * @param {Options} options - The options to set.
   * @returns {void}
   */
  setOptions(options: Options): void {
    this.options = options;
  }

  /**
   * Get the operating system (OS) information from the user agent.
   * @returns {OS | null} - An object representing the OS information, or null if not available.
   * @example
   * const os = requestDetail.getOs();
   * console.log(os); // { name: 'Windows', version: '10' }
   */
  getOs(): OS | null {
    return ua(this.req.headers["user-agent"])?.os || null;
  }

  /**
   * Get the browser information from the user agent
   * @returns {Browser | null} - An object representing the browser information, or null if not available
   *
   * @example
   *
   * const browser = requestDetail.getBrowser();
   * console.log(browser); // { name: 'Chrome', version: '58.0.3029.110' }
   *
   */
  getBrowser(): Browser | null {
    // @ts-ignore
    return ua(this.req.headers["user-agent"])?.browser || null;
  }

  /**
   * Get the device information from the user agent
   * @returns {Device | null} - An object representing the device information, or null if not available
   *
   * @example
   *
   * const device = requestDetail.getDevice();
   * console.log(device); // { type: 'desktop', vendor: 'Unknown', model: 'Unknown' }
   *
   */
  getDevice(): Device | null {
    return ua(this.req.headers["user-agent"])?.device || null;
  }

  /**
   * Get the CPU information from the user agent
   * @returns {CPU | null} - An object representing the CPU information, or null if not available
   *
   * @example
   *
   * const cpu = requestDetail.getCPU();
   * console.log(cpu); // { architecture: 'amd64' }
   *
   */
  getCPU(): CPU | null {
    return ua(this.req.headers["user-agent"])?.cpu || null;
  }

  /**
   * Get user agent.
   * @param {string} userAgent - The user agent string.
   * @example
   * fetchUserAgent(req.headers['user-agent'])
   */
  static get fetchUserAgent() {
    return ua;
  }

  /**
   * Get IP information for a specific IP address
   * @param {string} ip - The IP address
   * @param {string | undefined} token - The [iplocate token](https://www.iplocate.io)
   * @returns {Promise<I_iplocate>} - A Promise that returns the information related to the specific IP address upon success
   *
   * @example
   *
   * const ipInfo = await RequestDetail.getIpInfo('192.168.0.1');
   * console.log(ipInfo); // { ip: '192.168.0.1', country: 'US', city: 'New York', ... }
   *
   */
  static getIpInfoByIp(ip: string, token?: string): Promise<I_iplocate> {
    return new Iplocate(token).getIpInfo(ip);
  }

  /**
   * Middleware function to attach `RequestDetail` instance to the `req` object
   * @param {Request} req - The Express request object
   * @param {Response} res - The Express response object
   * @param {NextFunction} next - The Express next function
   *
   * @example
   *
   * app.use(RequestDetail.middleware);
   *
   */
  static middleware(req: Request, res: Response, next: NextFunction) {
    req.info = new RequestDetail(req, {});
    next();
  }
}

export default RequestDetail;
