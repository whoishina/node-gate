"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ParseCode = exports.Validate = exports.parseListPermissions = exports.ParsePermission = exports.PermissionLimiter = exports.BaseAuthenticate = exports.StringType = exports.BinState = void 0;
var BinState;
(function (BinState) {
    BinState["Off"] = "0";
    BinState["On"] = "1";
})(BinState = exports.BinState || (exports.BinState = {}));
var StringType;
(function (StringType) {
    StringType[StringType["Binary"] = 2] = "Binary";
    StringType[StringType["Hex"] = 16] = "Hex";
})(StringType = exports.StringType || (exports.StringType = {}));
var BaseAuthenticate;
(function (BaseAuthenticate) {
    BaseAuthenticate[BaseAuthenticate["Root"] = 1099511627775] = "Root";
})(BaseAuthenticate = exports.BaseAuthenticate || (exports.BaseAuthenticate = {}));
var PermissionLimiter;
(function (PermissionLimiter) {
    PermissionLimiter[PermissionLimiter["Maximum"] = 1099511627775] = "Maximum";
})(PermissionLimiter = exports.PermissionLimiter || (exports.PermissionLimiter = {}));
function ParsePermission(EnumObject) {
    var _a;
    var EnumInArray = Object.values(EnumObject);
    var EnumInArrayFiltered = EnumInArray.filter(function (x) { return !isNaN(x); });
    var HexArray = EnumInArrayFiltered.map(function (x) { return x; });
    var PermissionObject;
    for (var i = 0; i < HexArray.length; i++) {
        PermissionObject = __assign(__assign({}, PermissionObject), (_a = {}, _a[EnumInArray[i]] = HexArray[i], _a));
    }
    return PermissionObject;
}
exports.ParsePermission = ParsePermission;
/**
 * Parse list permissions from number code ( Decimal )
 * @param code Interger number format of permission code
 * @returns List of permissions in Hex representation
 */
function parseListPermissions(code) {
    // Limiter
    if (code > PermissionLimiter.Maximum) {
        throw new Error("Maximum permission is exceeded, Max = " + PermissionLimiter.Maximum);
    }
    // Convert to binary string
    var ListPermission = code.toString(StringType.Binary)
        // Make list binary to string format
        .toString()
        // Make array
        .split('')
        // Reverse array
        .reverse()
        // Parse to int ( Decimal )
        .map(function (Binary, index) { return Binary == "0" ? null : parseInt(Binary) * Math.pow(2, index); })
        // Filter null
        .filter(function (el) { return el !== null; })
        // Return array
        .map(function (val, index) { return "0x" + val.toString(StringType.Hex); });
    // Return list permission
    return ListPermission;
}
exports.parseListPermissions = parseListPermissions;
/**
 * Return is this
 * @param RequiredList List of permissions required
 * @param Code Code number of the permission
 * @returns Boolean
 */
function Validate(RequiredList, Code) {
    var CodeList = parseListPermissions(Code).map(function (e) { return parseInt(e); });
    var FilteredList = Object.values(RequiredList).filter(function (p) {
        if (CodeList.indexOf(p) === -1)
            return true;
        else
            return false;
    });
    var Result = FilteredList.filter(function (p) { return p != 0; });
    return Result.length == 0;
}
exports.Validate = Validate;
/**
 *
 */
function ParseCode(ListHex) {
    var listInt = Object.values(ListHex);
    if (listInt.length == 0)
        return 0;
    var SumValues = listInt.reduce(function (acc, val) { return acc + val; });
    return SumValues;
}
exports.ParseCode = ParseCode;
//# sourceMappingURL=index.js.map