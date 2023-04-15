import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Axios {
  instance: AxiosInstance;
  constructor(options?: AxiosRequestConfig<any>) {
    const _options = options || {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    this.instance = axios.create(_options);
  }

  get(url: string) {
    return this.instance.get(url);
  }

  post(url: string, data: any) {
    return this.instance.post(url, data);
  }

  put(url: string, data: any) {
    return this.instance.put(url, data);
  }

  delete(url: string) {
    return this.instance.delete(url);
  }
}

export default Axios;
