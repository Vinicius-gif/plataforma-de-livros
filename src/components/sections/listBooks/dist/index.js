"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BookCard_1 = require("../../ui/BookCard");
var LoadingSkeleton_1 = require("../../ui/LoadingSkeleton");
var ListBooks = function (_a) {
    var dataBooks = _a.dataBooks, isLoading = _a.isLoading;
    return (react_1["default"].createElement("section", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, isLoading ? (Array.from({ length: 10 }).map(function (_, index) { return (react_1["default"].createElement(LoadingSkeleton_1["default"], { key: index })); })) : (dataBooks === null || dataBooks === void 0 ? void 0 : dataBooks.length) ? (dataBooks.map(function (book) {
        var _a, _b, _c, _d, _e, _f;
        return (react_1["default"].createElement(BookCard_1["default"], { key: book.id, id: book.id, title: (_a = book.volumeInfo) === null || _a === void 0 ? void 0 : _a.title, authors: ((_b = book.volumeInfo.authors) === null || _b === void 0 ? void 0 : _b.join(', ')) || 'Autor Desconhecido', publisher: ((_c = book.volumeInfo) === null || _c === void 0 ? void 0 : _c.publisher) || 'Indefinido', image: (_d = book.volumeInfo.imageLinks) === null || _d === void 0 ? void 0 : _d.thumbnail, pageCount: ((_e = book.volumeInfo) === null || _e === void 0 ? void 0 : _e.pageCount) ? book.volumeInfo.pageCount : 0, description: (_f = book.volumeInfo) === null || _f === void 0 ? void 0 : _f.description }));
    })) : (react_1["default"].createElement("div", { className: "col-span-full flex justify-center items-center h-full my-10" },
        react_1["default"].createElement("p", { className: "text-2xl font-bold" }, "Nenhum livro encontrado :(")))));
};
exports["default"] = ListBooks;
