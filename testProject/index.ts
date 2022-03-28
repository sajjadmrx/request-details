import express, { Request, Response } from 'express'
import parser from 'ua-parser-js'

import RequestDetail from '../../request-detail/src/request_detail'
const app = express()


app.get('/', async (req: Request, res: Response) => {
    const x = await new RequestDetail(req).getIpInfoByIp(req.ip)
    const a = parser(req.headers['user-agent'])
    res.json(a)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})