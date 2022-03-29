"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDetail = void 0;
const iplocate_plugins_1 = __importDefault(require("./plugins/iplocate.plugins"));
require("ua-parser-js");
const ua_parser_js_plugin_1 = __importDefault(require("./plugins/ua-parser-js.plugin"));
class RequestDetail {
    constructor(req) {
        this.req = req;
        this.ip = req.ip;
    }
    getIpInfo() {
        const ip = this.req.ip;
        return new iplocate_plugins_1.default().getIpInfo(ip);
    }
    getOs() {
        return (0, ua_parser_js_plugin_1.default)(this.req.headers['user-agent']).os;
    }
    getBrowser() {
        return (0, ua_parser_js_plugin_1.default)(this.req.headers['user-agent']).browser;
    }
    getDevice() {
        return (0, ua_parser_js_plugin_1.default)(this.req.headers['user-agent']).device;
    }
    getCPU() {
        return (0, ua_parser_js_plugin_1.default)(this.req.headers['user-agent']).cpu;
    }
    /**
     *  Get user agent
     * @param userAgent
     *
     * @example
     * ```js
     * fetchUserAgent(req.headers['user-agent'])
     * ```
     */
    static get fetchUserAgent() {
        return ua_parser_js_plugin_1.default;
    }
    static getIpInfoByIp(ip) {
        return new iplocate_plugins_1.default().getIpInfo(ip);
    }
    static middleware(req, res, next) {
        // req.detail = new RequestDetail(req);
        req.info = new RequestDetail(req);
        next();
    }
}
exports.RequestDetail = RequestDetail;
