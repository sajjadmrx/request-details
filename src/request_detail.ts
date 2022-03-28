import { Request } from 'express'
import I_iplocate from './common/interfaces/iplocate.interface'
import Iplocate from './plugins/iplocate.plugins'
import 'ua-parser-js'
import ua from './plugins/ua-parser-js.plugin'

class RequestDetail {

    static get fetchUserAgent() {
        return ua
    }


    constructor(private req: Request) {

    }

    getIpInfo(): Promise<I_iplocate> {
        const ip = this.req.ip
        return new Iplocate().getIpInfo(ip)
    }

    getIpInfoByIp(ip: string): Promise<I_iplocate> {
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

}

RequestDetail.fetchUserAgent()
export default RequestDetail