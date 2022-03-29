"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Axios {
    constructor(options) {
        const _options = options || {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
        this.instance = axios_1.default.create(_options);
    }
    get(url) {
        return this.instance.get(url);
    }
    post(url, data) {
        return this.instance.post(url, data);
    }
    put(url, data) {
        return this.instance.put(url, data);
    }
    delete(url) {
        return this.instance.delete(url);
    }
}
exports.default = Axios;
