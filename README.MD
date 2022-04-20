
# request-details
A tiny Node.js module for retrieving a request's Details (ip,os,browser)


## ⌨️ Installation

```sh
npm install request-details
```

# Public Methods
- getIpInfo
- getOs
- getBrowser
- getDevice
- getCPU
- fetchUserAgent (Static)
- getIpInfoByIp (Static)
- middleware (Static)

# ✨ Examples
> Javascript
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

> TypeScript
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