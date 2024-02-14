'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var md_1 = require("react-icons/md");
var authService_1 = require("../../../../lib/firebase/authService");
var fireStoreService_1 = require("../../../../lib/firebase/fireStoreService");
var FavoriteButton = function (_a) {
    var bookData = __rest(_a, []);
    var user = authService_1.useAuth().user;
    return (react_1["default"].createElement("div", { className: "absolute top-0 right-0 mt-4 mr-4 cursor-pointer", onClick: function () { return fireStoreService_1.addFavoriteBook(user.uid, bookData); } },
        react_1["default"].createElement(md_1.MdFavoriteBorder, { className: "size-8" })));
};
exports["default"] = FavoriteButton;
