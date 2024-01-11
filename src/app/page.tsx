import Banner from '../components/sections/banner';
import BookCard from '../components/ui/BookCard';

export default function Home() {
  return (
    <main>
      <Banner />
      <BookCard
        image="1"
        title="Livro"
        author="autor"
        totalEditions="12"
        firstEditionYear="1980"
      />
    </main>
  );
}
