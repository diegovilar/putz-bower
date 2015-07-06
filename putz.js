require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var native_1 = require('./native');
var IOError = (function (_super) {
    __extends(IOError, _super);
    function IOError() {
        _super.apply(this, arguments);
        this.name = 'IOError';
    }
    return IOError;
})(native_1.Error);
exports.IOError = IOError;

},{"./native":3}],2:[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var native_1 = require('./native');
var JSONParseError = (function (_super) {
    __extends(JSONParseError, _super);
    function JSONParseError() {
        _super.apply(this, arguments);
        this.name = 'JSONParseError';
    }
    return JSONParseError;
})(native_1.Error);
exports.JSONParseError = JSONParseError;

},{"./native":3}],3:[function(require,module,exports){
/*!
 * This module just exports the host's Error constructors.
 */

exports.Error = Error;
exports.TypeError = TypeError;
exports.ReferenceError = ReferenceError;
exports.RangeError = RangeError;
exports.EvalError = EvalError;
exports.URIError = URIError;
exports.SyntaxError = SyntaxError;
},{}],4:[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var io_error_1 = require('./io-error');
var NetworkError = (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError() {
        _super.apply(this, arguments);
        this.name = 'NetworkError';
    }
    return NetworkError;
})(io_error_1.IOError);
exports.NetworkError = NetworkError;

},{"./io-error":1}],"putz/http":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var network_error_1 = require('../network-error');
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(statusCode, message) {
        _super.call(this, message);
        this.name = 'HttpError';
        this.statusCode = Number(statusCode) || 0;
    }
    HttpError.createFromStatusCode = function (statusCode, message) {
        switch (statusCode) {
            case 400:
                return new HttpBadRequestError(message);
            case 401:
                return new HttpUnauthorizedError(message);
            case 403:
                return new HttpForbiddenError(message);
            case 404:
                return new HttpNotFoundError(message);
            case 405:
                return new HttpMethodNotAllowedError(message);
            case 409:
                return new HttpConflictError(message);
            case 410:
                return new HttpGoneError(message);
            case 412:
                return new HttpPreconditionFailedError(message);
            case 415:
                return new HttpUnsurpportedMediaTypeError(message);
            case 500:
                return new HttpInternalServerError(message);
            case 501:
                return new HttpNotImplementedError(message);
        }
        return new HttpError(statusCode, message);
    };
    return HttpError;
})(network_error_1.NetworkError);
exports.HttpError = HttpError;
var HttpBadRequestError = (function (_super) {
    __extends(HttpBadRequestError, _super);
    function HttpBadRequestError(message) {
        _super.call(this, 400, message);
        this.name = 'HttpBadRequestError';
    }
    return HttpBadRequestError;
})(HttpError);
exports.HttpBadRequestError = HttpBadRequestError;
var HttpUnauthorizedError = (function (_super) {
    __extends(HttpUnauthorizedError, _super);
    function HttpUnauthorizedError(message) {
        _super.call(this, 401, message);
        this.name = 'HttpUnauthorizedError';
    }
    return HttpUnauthorizedError;
})(HttpError);
exports.HttpUnauthorizedError = HttpUnauthorizedError;
var HttpForbiddenError = (function (_super) {
    __extends(HttpForbiddenError, _super);
    function HttpForbiddenError(message) {
        _super.call(this, 403, message);
        this.name = 'HttpForbiddenError';
    }
    return HttpForbiddenError;
})(HttpError);
exports.HttpForbiddenError = HttpForbiddenError;
var HttpNotFoundError = (function (_super) {
    __extends(HttpNotFoundError, _super);
    function HttpNotFoundError(message) {
        _super.call(this, 404, message);
        this.name = 'HttpNotFoundError';
    }
    return HttpNotFoundError;
})(HttpError);
exports.HttpNotFoundError = HttpNotFoundError;
var HttpMethodNotAllowedError = (function (_super) {
    __extends(HttpMethodNotAllowedError, _super);
    function HttpMethodNotAllowedError(message) {
        _super.call(this, 405, message);
        this.name = 'HttpMethodNotAllowedError';
    }
    return HttpMethodNotAllowedError;
})(HttpError);
exports.HttpMethodNotAllowedError = HttpMethodNotAllowedError;
var HttpConflictError = (function (_super) {
    __extends(HttpConflictError, _super);
    function HttpConflictError(message) {
        _super.call(this, 409, message);
        this.name = 'HttpConflictError';
    }
    return HttpConflictError;
})(HttpError);
exports.HttpConflictError = HttpConflictError;
var HttpGoneError = (function (_super) {
    __extends(HttpGoneError, _super);
    function HttpGoneError(message) {
        _super.call(this, 410, message);
        this.name = 'HttpGoneError';
    }
    return HttpGoneError;
})(HttpError);
exports.HttpGoneError = HttpGoneError;
var HttpPreconditionFailedError = (function (_super) {
    __extends(HttpPreconditionFailedError, _super);
    function HttpPreconditionFailedError(message) {
        _super.call(this, 412, message);
        this.name = 'HttpPreconditionFailedError';
    }
    return HttpPreconditionFailedError;
})(HttpError);
exports.HttpPreconditionFailedError = HttpPreconditionFailedError;
var HttpUnsurpportedMediaTypeError = (function (_super) {
    __extends(HttpUnsurpportedMediaTypeError, _super);
    function HttpUnsurpportedMediaTypeError(message) {
        _super.call(this, 415, message);
        this.name = 'HttpUnsurpportedMediaTypeError';
    }
    return HttpUnsurpportedMediaTypeError;
})(HttpError);
exports.HttpUnsurpportedMediaTypeError = HttpUnsurpportedMediaTypeError;
var HttpInternalServerError = (function (_super) {
    __extends(HttpInternalServerError, _super);
    function HttpInternalServerError(message) {
        _super.call(this, 500, message);
        this.name = 'HttpInternalServerError';
    }
    return HttpInternalServerError;
})(HttpError);
exports.HttpInternalServerError = HttpInternalServerError;
var HttpNotImplementedError = (function (_super) {
    __extends(HttpNotImplementedError, _super);
    function HttpNotImplementedError(message) {
        _super.call(this, 501, message);
        this.name = 'HttpNotImplementedError';
    }
    return HttpNotImplementedError;
})(HttpError);
exports.HttpNotImplementedError = HttpNotImplementedError;

},{"../network-error":4}],"putz":[function(require,module,exports){
/**
 * The library man file, exporting everything.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./native'));
__export(require('./json-parse-error'));
__export(require('./io-error'));
__export(require('./network-error'));

},{"./io-error":1,"./json-parse-error":2,"./native":3,"./network-error":4}]},{},[])


//# sourceMappingURL=putz.js.map