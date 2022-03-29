"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../common/enums/enums");
const axios_1 = __importDefault(require("../utils/axios"));
class Iplocate {
    constructor(token) {
        this.token = token;
        this.header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        if (this.token) {
            this.header['X-API-Key'] = this.token;
        }
        this.ipLocateRequest = new axios_1.default(this.header);
    }
    getIpInfo(ip) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ipLocateRequest.get(enums_1.urls.iplocate + ip);
            return response.data;
        });
    }
}
exports.default = Iplocate;
