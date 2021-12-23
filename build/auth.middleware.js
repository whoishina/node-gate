"use strict";
exports.__esModule = true;
exports.Auth = void 0;
var jwt = require("jsonwebtoken");
var app_enum_1 = require("./app.enum");
var config_1 = require("./config");
function Auth(req, res, next) {
    // Authorization headers is required
    if (!req.headers.authorization) {
        res.status(401).send({
            message: app_enum_1.RequestResponseMessage.Unauthorized
        });
        return;
    }
    // Get the last part from a authorization header string like "bearer token-value"
    var token = req.headers.authorization.split(' ')[1];
    // Decode the token using a secret key-phrase
    try {
        var verified = jwt.verify(token, config_1.TokenSecret);
        // Add the decoded user name and id to the request object
        var decoded = jwt.decode(token);
        req.user = decoded.user;
        // nhe next() call triggers the next middleware in the chain
        next();
    }
    catch (_a) {
        res.status(401).send({
            message: app_enum_1.RequestResponseMessage.Unauthorized
        });
        return;
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.middleware.js.map