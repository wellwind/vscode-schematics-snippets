"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dasherize = (str) => {
    return exports.decamelize(str).replace((/[ _]/g), '-');
};
exports.decamelize = (str) => {
    return str.replace((/([a-z\d])([A-Z])/g), '$1_$2').toLowerCase();
};
exports.camelize = (str) => {
    return str
        .replace(/(-|_|\.|\s)+(.)?/g, (_match, _separator, chr) => {
        return chr ? chr.toUpperCase() : '';
    })
        .replace(/^([A-Z])/, (match) => match.toLowerCase());
};
//# sourceMappingURL=string.js.map