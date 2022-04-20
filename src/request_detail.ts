import { Request, Response, NextFunction } from 'express'

import I_iplocate from './common/interfaces/iplocate.interface'
import Iplocate from './plugins/iplocate.plugins'
import 'ua-parser-js'
import ua from './plugins/ua-parser-js.plugin'

console.log("HELLO")
class RequestDetail {


    protected ip: string
    constructor(private req: Request) {
        this.ip = req.ip
    }

    getIpInfo(): Promise<I_iplocate> {
        const ip = this.req.ip
        return new Iplocate().getIpInfo(ip)
    }

    getOs(): UAParser.IOS {
        return ua(this.req.headers['user-agent']).os
    }

    getBrowser(): UAParser.IBrowser {
        return ua(this.req.headers['user-agent']).browser
    }

    getDevice(): UAParser.IDevice {
        return ua(this.req.headers['user-agent']).device
    }

    getCPU(): UAParser.ICPU {
        return ua(this.req.headers['user-agent']).cpu
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
        return ua
    }

    static getIpInfoByIp(ip: string): Promise<I_iplocate> {
        return new Iplocate().getIpInfo(ip)
    }


    static middleware(req: Request, res: Response, next: Function) {
        // req.detail = new RequestDetail(req);
        req.info = new RequestDetail(req);
        next()
    }


}

export default RequestDetail