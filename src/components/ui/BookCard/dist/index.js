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
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var dialog_1 = require("../dialog");
var FavoriteButton_1 = require("./FavoriteButton");
var BookCard = function (props) {
    var id = props.id, image = props.image, title = props.title, authors = props.authors, pageCount = props.pageCount, publisher = props.publisher, description = props.description;
    return (react_1["default"].createElement("div", { className: "relative grid grid-cols-1 content-center justify-items-center h-[450px] max-w-72 w-80 mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300" },
        react_1["default"].createElement(FavoriteButton_1["default"], __assign({ key: id }, props)),
        image ? (react_1["default"].createElement("img", { className: "w-32 h-40", src: image, alt: title })) : (react_1["default"].createElement("img", { className: "w-32 h-40", src: "/cover_not_found.jpg", alt: title })),
        react_1["default"].createElement("div", { className: "px-4 py-3 text-center" },
            react_1["default"].createElement("h2", { className: "font-bold text-lg mb-2" }, title),
            react_1["default"].createElement("p", { className: "text-gray-700 text-sm mb-2" },
                "Author: ",
                authors ? authors : 'Indefinido'),
            react_1["default"].createElement("p", { className: "text-gray-700 text-sm mb-2" },
                "Total de paginas: ",
                pageCount ? pageCount : 'Indefinido'),
            react_1["default"].createElement("p", { className: "text-gray-700 text-sm" },
                "Editora: ",
                publisher ? publisher : 'Indefinido'),
            react_1["default"].createElement(dialog_1.Dialog, null,
                react_1["default"].createElement(dialog_1.DialogTrigger, { asChild: true },
                    react_1["default"].createElement("button", { className: "bg-blue-500 text-white py-2 px-3 mt-3 hover:bg-blue-600" }, "Detalhes")),
                react_1["default"].createElement(dialog_1.DialogContent, null,
                    react_1["default"].createElement(dialog_1.DialogHeader, null,
                        react_1["default"].createElement(dialog_1.DialogTitle, { className: "text-center font-semibold text-3xl underline" }, "Detalhes do livro"),
                        react_1["default"].createElement("img", { className: "w-32 h-40", src: image, alt: title }),
                        react_1["default"].createElement("h2", { className: "font-bold text-2xl mb-2 text-center underline" }, title),
                        react_1["default"].createElement("p", { className: "font-medium" }, description)))))));
};
exports["default"] = BookCard;
