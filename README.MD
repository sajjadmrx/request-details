
# request-details
A tiny Node.js module for retrieving a request's Details (ip,os,browser)


## ⌨️ Installation

```bash
npm install request-details
```

## ⚙️ Usage

```js
const RequestDetails = require('request-details').default;
// in TypeScript:
import RequestDetails from 'request-details';

app.use(RequestDetails.middleware) // it will add the details to the request object, (Optional)

// when you not use middleware:
app.get('/',  (req, res) => {
  const details = new RequestDetails(req);
  console.log(details.getDevice())
});
```
# 📦 Methods

>  🔓 Public Methods
<br />
> 🔒 Private Methods
<br /> 
> 📍 Static Methods

- <a id="a-link" href='#getIpInfo'>getIpInfo</a> 🔓  
- <a id="a-link" href='#getOs' >getOs</a> 🔓 
- <a id='a-link' href='#getBrowser'>getBrowser</a> 🔓
- <a id='a-link' href='#getDevice'> getDevice</a> 🔓
- <a id='a-link' href='#getCPU'>getCPU</a> 🔓
- <a id='a-link' href='#fetchUserAgent'> fetchUserAgent</a>📍
- <a id='a-link' href='#getIpInfoByIp'>getIpInfoByIp<a> 📍
- <a id='a-link' href='#middleware'>middleware</a> 📍



# ✨ Examples
> [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
 Javascript
```js

const express = require('express');
const app = express();

const request_Detail = requir('request-details').default


app.set("trust proxy", true);


app.get('/', async (req, res, next) => {
    const requestD = new request_Detail(req)
    const ipDetails = await requestD.getIpInfo()
    res.json(ipDetails)
})

// With Middleware
app.use(request_Detail.middleware)
app.get('/ip', async (req, res, next) => {
    const ipDetails = await req.info.getIpInfo()
    res.json(ipDetails)
})

app.get('/os', (req, res, next) => {
    const osDetails = req.info.getOs()
    res.json(osDetails)
})

app.get('/browser', (req, res, next) => {
    const BrDetails = req.info.getBrowser()
    res.json(BrDetails)
})
//end Middleware
app.listen(3000)
```

<br />
<br />

> [![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
 TypeScript
```ts
import RequestDetail from 'request-details'
import express, { Request, Response } from 'express'


const app = express()

app.use(RequestDetail.middleware)
app.get('/', async (req: Request, res: Response) => {
    try {
        const ipDet = await req.info.getIpInfo()
        res.json(ipDet)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.get("/ipD", async (req: Request, res: Response) => {
    try {
        const targetIp = req.query.ip
        const ip = await RequestDetail.getIpInfoByIp(String(targetIp))
        res.json(ip)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Without Middleware
app.get('/full', (req: Request, res: Response) => {

    const requestDetail = new RequestDetail(req)
    const browser = requestDetail.getBrowser()
    const os = requestDetail.getOs()

    res.json({
        browser,
        os
    })
})


app.listen(3000)
```


<div id="getIpInfo"></div>

### getIpInfo (Promise)
```json
{
    "ip": string,
    "country": string,
    "country_code": string,
    "city": string,
    "continent":string,
    "latitude": double,
    "longitude": double,
    "time_zone": string,
    "postal_code": string,
    "org": string,
    "asn": string,
    "subdivision": string,
    "subdivision2": string
}
```

<div id="getOs"></div>

### getOs
```json
{
 "name": string,
 "version": string 
}
```

<div id='getBrowser'> </div>

### getBrowser
```json 
{
    "name": string,
    "version": string
}
```

<div id='getDevice'></div>

### getDevice
```json
{
    /**
         * Determined dynamically
         */
        "model": string | undefined;

        /**
         * Possible type:
         * console, mobile, tablet, smarttv, wearable, embedded
         */
        "type": string | undefined;

        /**
         * Possible vendor:
         * Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone,
         * Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian,
         * Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp,
         * Siemens, Sony-Ericsson, Sprint, Xbox, ZTE
         */
        "vendor": string | undefined;
}
```

<div id='getCPU'></div>

### getCPU
```json
{
   "architecture": string | undefined;
}
```

<div id='fetchUserAgent'></div>

### fetchUserAgent 
```js
fetchUserAgent(req.headers['user-agent'])
// output:
 /// This will print an object structured like this:
       /* {
            ua: "",
            browser: {
                name: "",
                version: "",
                major: "" //@deprecated
            },
            engine: {
                name: "",
                version: ""
            },
            os: {
                name: "",
                version: ""
            },
            device: {
                model: "",
                type: "",
                vendor: ""
            },
            cpu: {
                architecture: ""
            }
        }
    */
```

<div id='getIpInfoByIp'></div>

### getIpInfoByIp (Promise)
```js
getIpInfoByIp("ip")
// output:
/*{
  
    "ip": string,
    "country": string,
    "country_code": string,
    "city": string,
    "continent":string,
    "latitude": double,
    "longitude": double,
    "time_zone": string,
    "postal_code": string,
    "org": string,
    "asn": string,
    "subdivision": string,
    "subdivision2": string
 
}*/
```


<div id='middleware'></div>

### middleware
```js
app.use(RequestDetail.middleware)
```