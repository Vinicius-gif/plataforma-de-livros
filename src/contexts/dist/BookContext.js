'use client';
"use strict";
exports.__esModule = true;
exports.BookContextProvider = exports.BookContext = void 0;
var react_1 = require("react");
exports.BookContext = react_1.createContext({
    dataBooks: [],
    setDataBooks: function () { },
    isLoading: false,
    setIsLoading: function () { }
});
exports.BookContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), dataBooks = _b[0], setDataBooks = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var value = {
        dataBooks: dataBooks,
        setDataBooks: setDataBooks,
        isLoading: isLoading,
        setIsLoading: setIsLoading
    };
    return React.createElement(exports.BookContext.Provider, { value: value }, children);
};
