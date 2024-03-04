/* eslint-disable prettier/prettier */
import { Book } from '@/@types/BookContextTypes';
import { searchBooks } from '@/api/booksApi';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

const apiKey = process.env.NEXT_PUBLIC_KEY_GOOGLE_BOOKS;


describe('searchBooks', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch books from Google Books API', async () => {
    const searchTerm = 'Harry Potter';
    const mockResponse: { items: Book[] } = {
      items: [
        {
          id: '1',
          volumeInfo: {
            title: 'Harry Potter and the Sorcerer\'s Stone',
            authors: ['J.K. Rowling'],
            publisher: 'Bloomsbury Publishing',
            description: 'The first book in the Harry Potter series.',
            pageCount: 320,
            categories: ['Fantasy'],
            maturityRating: 'NOT_MATURE',
            infoLink: 'https://www.example.com/harry_potter_1',
            imageLinks: {
              smallThumbnail:
                'https://www.example.com/harry_potter_1_small.jpg',
              thumbnail: 'https://www.example.com/harry_potter_1.jpg'
            }
          }
        },
        {
          id: '2',
          volumeInfo: {
            title: 'Harry Potter and the Chamber of Secrets',
            authors: ['J.K. Rowling'],
            publisher: 'Bloomsbury Publishing',
            description: 'The second book in the Harry Potter series.',
            pageCount: 352,
            categories: ['Fantasy'],
            maturityRating: 'NOT_MATURE',
            infoLink: 'https://www.example.com/harry_potter_2',
            imageLinks: {
              smallThumbnail:
                'https://www.example.com/harry_potter_2_small.jpg',
              thumbnail: 'https://www.example.com/harry_potter_2.jpg'
            }
          }
        }
      ]
    };
    mock
      .onGet(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`
      )
      .reply(200, mockResponse);

    const books = await searchBooks(searchTerm);

    expect(books).toHaveLength(2);
    expect(books[0].id).toEqual('1');
    expect(books[0].volumeInfo.title).toEqual(
      'Harry Potter and the Sorcerer\'s Stone'
    );
    expect(books[1].id).toEqual('2');
    expect(books[1].volumeInfo.title).toEqual(
      'Harry Potter and the Chamber of Secrets'
    );
  });

  it('should handle errors from Google Books API', async () => {
    const searchTerm = 'Nonexistent Book';
    const errorMessage = 'Request failed with status code 404';
    mock
      .onGet(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`
      )
      .reply(404, errorMessage);

    await expect(searchBooks(searchTerm)).rejects.toThrow(errorMessage);
  });
});
