export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    description: string;
    pageCount: number;
    categories: string[];
    maturityRating: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
