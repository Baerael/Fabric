"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwd = exports.getTime = exports.login = exports.ping = void 0;
var data = {
    username: "Fabric",
    password: "password1"
};
var ping = function (req, res) {
    res.status(200).json({ message: "ping" });
};
exports.ping = ping;
var login = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!findUser(username)) {
        return statusCode('404', 'user does not exist', res);
    }
    if (!checkPassword(password)) {
        return statusCode('401', 'invalid password', res);
    }
    var getUsername = data.username;
    res.status(200).json({ username: getUsername });
};
exports.login = login;
var getTime = function (req, res) {
    var date = new Date();
    res.status(200).json({ date: date });
};
exports.getTime = getTime;
var cwd = function (req, res) {
    var dir = __dirname;
    res.status(200).json({ dir: dir });
};
exports.cwd = cwd;
//====================
// Helper Functions
//====================
var findUser = function (username) { return data.username === username; };
var checkPassword = function (password) { return data.password === password; };
var statusCode = function (code, message, res) {
    switch (code) {
        case '200':
            res.status(200).json({ success: message });
            break;
        case '401':
            res.status(401).json({ error: message });
            break;
        case '404':
            res.status(404).json({ error: message });
            break;
    }
};
