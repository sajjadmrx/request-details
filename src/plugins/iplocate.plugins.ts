import { urls } from "../common/enums/enums";
import I_iplocate from "../common/interfaces/iplocate.interface";
import Axios from "../utils/axios";



class Iplocate {

    private header: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    private ipLocateRequest: Axios;
    constructor(private token?: string) {
        if (this.token) {
            this.header['X-API-Key'] = this.token;
        }
        this.ipLocateRequest = new Axios(this.header)
    }


    async getIpInfo(ip: string): Promise<I_iplocate> {
        const response = await this.ipLocateRequest.get(urls.iplocate + ip)
        return response.data as I_iplocate
    }


}

export default Iplocate