import RequestDetail from './request_detail'
declare global {

    namespace Express {

        interface Request {
            info: RequestDetail
        }

    }
}