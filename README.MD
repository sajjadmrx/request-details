
# request-details
A tiny Node.js module for retrieving a request's details such as IP address, operating system, and browser information.


<p align="center">
    <img src="https://img.shields.io/github/languages/top/sajjadmrx/request-details" alt="languages" >
    <img src="https://img.shields.io/github/stars/sajjadmrx/request-details">
</p>


## ⌨️ Installation

```bash
npm install request-details
```

## ⚙️ Usage

```js
const RequestDetails = require('request-details').default;
// CommonJS:
import RequestDetails from 'request-details';

app.use(RequestDetails.middleware); // It will add the details to the request object (optional)

// When you do not use middleware:
app.get('/', (req, res) => {
    const details = new RequestDetails(req);
    console.log(details.getDevice());
});

app.get('/middleware', async (req, res, next) => {
    const ipDetails = await req.info.getIpInfo()
    res.json(ipDetails)
})
```

## 💡 Features

* Retrieve IP address, operating system, and browser information from incoming HTTP requests.
* Optional middleware to automatically add request details to the request object.
* Simple and easy-to-use API with intuitive methods for retrieving request details.
* Works with Express, NestJs, and other Node.js web frameworks.
* Supports CommonJS and ES modules for importing in your project.

