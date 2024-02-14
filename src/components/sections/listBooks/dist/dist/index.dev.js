'use strict';

exports.__esModule = true;

var react_1 = require('react');

var BookCard_1 = require('../../ui/BookCard');

var LoadingSkeleton_1 = require('../../ui/LoadingSkeleton');

var ListBooks = function ListBooks(_a) {
  var dataBooks = _a.dataBooks,
      isLoading = _a.isLoading;
  return react_1['default'].createElement('section', {
    className: 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }, isLoading ? Array.from({
    length: 10
  }).map(function (_, index) {
    return react_1['default'].createElement(LoadingSkeleton_1['default'], {
      key: index
    });
  }) : (dataBooks === null || dataBooks === void 0 ? void 0 : dataBooks.length) ? dataBooks.map(function (book) {
    return react_1['default'].createElement(BookCard_1['default'], {
      key: book.id,
      id: book.id,
      title: book.title,
      authors: book.authors,
      publisher: book.publisher,
      image: book.image,
      pageCount: book.pageCount ? book.pageCount : 0,
      description: book.description
    });
  }) : react_1['default'].createElement('p', null, 'Nenhum livro encontrado.'));
};

exports['default'] = ListBooks;