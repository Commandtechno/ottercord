"use strict";
exports.__esModule = true;
exports.deleteFollowupMessage = exports.editFollowupMessage = exports.getFollowupMessage = exports.createFollowupMessage = exports.deleteOriginalInteractionResponse = exports.editOriginalInteractionResponse = exports.getOriginalInteractionResponse = exports.createInteractionResponse = exports.InteractionCallbackType = exports.InteractionType = exports.fetch = exports.setToken = exports.getAuth = exports.token = void 0;
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
exports.InteractionType = {
    "Ping": 1,
    "ApplicationCommand": 2,
    "MessageComponent": 3,
    "ApplicationCommandAutocomplete": 4,
    "ModalSubmit": 5
};
exports.InteractionCallbackType = {
    /** ACK a Ping*/ "Pong": 1,
    /** respond to an interaction with a message*/ "ChannelMessageWithSource": 4,
    /** ACK an interaction and edit a response later, the user sees a loading state*/ "DeferredChannelMessageWithSource": 5,
    /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/ "DeferredUpdateMessage": 6,
    /** for components, edit the message the component was attached to*/ "UpdateMessage": 7,
    /** respond to an autocomplete interaction with suggested choices*/ "ApplicationCommandAutocompleteResult": 8,
    /** respond to an interaction with a popup modal*/ "Modal": 9
};
function createInteractionResponse(interactionId, interactionToken, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/interactions".concat(interactionId).concat(interactionToken).concat("/callback"), headers: { Authorization: getAuth() } }); }
exports.createInteractionResponse = createInteractionResponse;
function getOriginalInteractionResponse(applicationId, interactionToken) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.getOriginalInteractionResponse = getOriginalInteractionResponse;
function editOriginalInteractionResponse(applicationId, interactionToken) { return fetch({ method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.editOriginalInteractionResponse = editOriginalInteractionResponse;
function deleteOriginalInteractionResponse(applicationId, interactionToken) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.deleteOriginalInteractionResponse = deleteOriginalInteractionResponse;
function createFollowupMessage(applicationId, interactionToken) { return fetch({ method: "POST", path: "/webhooks".concat(applicationId).concat(interactionToken), headers: { Authorization: getAuth() } }); }
exports.createFollowupMessage = createFollowupMessage;
function getFollowupMessage(applicationId, interactionToken, messageId) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.getFollowupMessage = getFollowupMessage;
function editFollowupMessage(applicationId, interactionToken, messageId) { return fetch({ method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.editFollowupMessage = editFollowupMessage;
function deleteFollowupMessage(applicationId, interactionToken, messageId) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.deleteFollowupMessage = deleteFollowupMessage;
