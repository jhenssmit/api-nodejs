"use strict";

var _express = _interopRequireDefault(require("express"));
var _nodemon = require("nodemon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.listen(3000);
console.log('server listen port', 3000);