
# request-details
a Node.js package that provides a class for handling request details in an Express application. It extracts information related to the user's IP, operating system (OS), browser, device, and CPU from the user agent string in the HTTP request headers.

<p align="center">
    <img src="https://img.shields.io/github/languages/top/sajjadmrx/request-details" alt="languages" >
    <img src="https://img.shields.io/github/stars/sajjadmrx/request-details">
</p>


## ⌨️ Installation

```bash
npm install request-details
```

## ⚙️ Usage
To use Request-Details in your Express application, you can import the RequestDetail class from the package and create an instance of it with the Express request object. Here's an example:


```js
const RequestDetails = require('request-details').default;
// CommonJS:
import RequestDetails from 'request-details';

import express from "express";

const app = express();

app.get("/", (req, res) => {
  const requestDetail = new RequestDetail(req);
  // Get IP info
  requestDetail.getIpInfo()
    .then(ipInfo => {
      console.log(ipInfo);
      // { ip: '127.0.0.1', country: 'US', city: 'New York', ... }
    })
    .catch(err => {
      console.error(err);
    });

  // Get OS info
  const os = requestDetail.getOs();
  console.log(os); // { name: 'Windows', version: '10' }

  // Get browser info
  const browser = requestDetail.getBrowser();
  console.log(browser); // { name: 'Chrome', version: '58.0.3029.110' }

  // Get device info
  const device = requestDetail.getDevice();
  console.log(device); // { type: 'desktop', vendor: 'Unknown', model: 'Unknown' }

  // Get CPU info
  const cpu = requestDetail.getCPU();
  console.log(cpu); // { architecture: 'amd64' }

  res.send("Hello world!");
});

app.use(RequestDetails.middleware); // It will add the details to the request object (optional)
app.get('/middleware', async (req, res, next) => {
    const ipDetails = await req.info.getIpInfo()
    res.json(ipDetails)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

```

## 💡 Features

* Retrieve IP address, operating system, and browser information from incoming HTTP requests.
* Optional middleware to automatically add request details to the request object.
* Simple and easy-to-use API with intuitive methods for retrieving request details.
* Works with Express, NestJs, and other Node.js web frameworks.
* Supports CommonJS and ES modules for importing in your project.

## 🚀 API

### `RequestDetail`
* `constructor(req: Request, options?: Options)`: Creates an instance of the RequestDetail class with the Express request object and optional options to configure the instance.
* `getIpInfo(): Promise<I_iplocate>`: Get information related to user's IP. Returns a Promise that resolves with the IP information.
* `setOptions(options: Options): void`: Sets the options for the RequestDetail instance.
* `getOs(): OS | null`: Get the operating system (OS) information from the user agent.
* `getBrowser(): Browser | null`: Get the browser information from the user agent.
* `getDevice(): Device | null`: Get the device information from the user agent.
* `getCPU(): CPU | null`: Get the CPU information from the user agent.
* `static fetchUserAgent(userAgent: string)`: Get user agent from a user agent string.
* `static getIpInfoByIp(ip: string, token?: string): Promise<I_iplocate>`: Get IP information for a specific IP address.


## 🤝 Contributing
If you would like to contribute to Request-Details, please open an issue or submit a pull request on the GitHub repository. 🔧💻🔍
