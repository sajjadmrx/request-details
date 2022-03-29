import RequestDetail from "../../src/request_detail"

declare global {

    namespace Express {

        interface Request {
            info: RequestDetail
        }

    }
}