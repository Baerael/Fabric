"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var controller_1 = require("../controller");
var body_parser_1 = __importDefault(require("body-parser"));
router.use((0, body_parser_1.default)());
console.log(__dirname);
router.post('/login', controller_1.authentication.login);
router.get('/gettime', controller_1.authentication.getTime);
router.get('/cwd', controller_1.authentication.cwd);
exports.default = router;
