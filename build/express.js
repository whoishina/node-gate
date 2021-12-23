"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var auth_middleware_1 = require("./auth.middleware");
var article_middleware_1 = require("./article.middleware");
var article_controller_1 = require("./article.controller");
// create express app
var app = express();
app.use(bodyParser.json());
// Dont be afraid, just use the middleware
// Dont care about this route :)
app.get('/', function (req, res) {
    res.send('Hello World!');
});
/**
 * Using Node-Gate as a middleware
 *
 * DEMO:
 * Try to post an article
 * - Create a POST request to localhost:3000/api/v1/article
 * - Your JWT token should be in the header
 * - The body of token should be has `user` property (Auth interface)
 * - Demo jwt payload should be has a : { user:{ id: 1, name: 'admin', role : 112 } }
 * - '112' is the role code of user, this code can parse to a of list roles
 *
 * - This route has 2 middlewares
 *      - 1. Auth
 *      - 2. isCanPostArticle
 *      - If the user's role has contains 'article.write' permission, then you can post an article
 */
app.post('/api/v1/article', auth_middleware_1.Auth, article_middleware_1.isCanPostArticle, article_controller_1.CreateArticle);
// Listen application on port 3000
// You can change the port if you has a port conflict
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=express.js.map