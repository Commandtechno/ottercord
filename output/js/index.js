"use strict";
exports.__esModule = true;
exports.ApplicationCommandOptionType = exports.AchievementLocaleObject = exports.fetch = exports.setToken = exports.getAuth = exports.token = void 0;
var https_1 = require("https");
function getAuth() {
    return "Bot ".concat(exports.token);
}
exports.getAuth = getAuth;
function setToken(newToken) {
    exports.token = newToken;
}
exports.setToken = setToken;
function fetch(_a) {
    var method = _a.method, path = _a.path, body = _a.body, headers = _a.headers;
    return new Promise(function (resolve, reject) {
        var req = (0, https_1.request)("https://discord.com/api/v9" + path, { method: method, headers: headers }, function (res) {
            var chunks = [];
            res.on("data", function (chunk) { return chunks.push(chunk); });
            res.on("end", function () {
                var text = Buffer.concat(chunks).toString();
                if (res.statusCode === 200) {
                    if (res.headers["content-type"] === "application/json")
                        resolve(JSON.parse(text));
                    else
                        resolve(text);
                }
                else
                    reject(JSON.parse(text));
            });
        });
        if (body)
            req.write(body);
        req.end();
    });
}
exports.fetch = fetch;
exports.AchievementLocaleObject = {
    /** the default locale for the achievement*/ "Default": "default",
    /** object of locales as the key and achievement translations as the value*/ "Localizations": "localizations?"
};
exports.ApplicationCommandOptionType = {
    "SubCommand": 1,
    "SubCommandGroup": 2,
    "String": 3,
    "Integer": 4,
    "Boolean": 5,
    "User": 6,
    "Channel": 7,
    "Role": 8,
    "Mentionable": 9,
    "Number": 10,
    "Attachment": 11
};
