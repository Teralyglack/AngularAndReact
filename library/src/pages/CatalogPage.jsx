import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Message from '../components/Message';

// ============================================================
// CatalogPage: каталог. Поиск и список книг из API.
// Самая важная страница, начни с неё.
// ============================================================

// ПЛАН ПО ШАГАМ (после каждого проверяй в браузере):
//
// ШАГ 1. Состояние поля:
//   const [text, setText] = useState('');
//   Передай в <SearchBar value={text} onChange={setText} />
//   Проверь: печатаешь в поле, и оно работает.
//
// ШАГ 2. Запрос в API (когда готов api/books.js):
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['books', text],
//     queryFn: () => searchBooks(text),
//     enabled: text.length >= 2,
//   });
//   Проверь: console.log(data) выводит массив после ввода 2+ букв.
//   (Пока без debounce: запрос уйдёт на каждую букву. Это нормально для теста.)
//
// ШАГ 3. Покажи состояния вместо заглушки ниже:
//   if (isLoading) → <Message type="loading" text="Загружаем..." />
//   if (isError)   → <Message type="error" text="Не удалось загрузить" />
//   если data пустой → <Message type="empty" text="Ничего не найдено" />
//   иначе → <ul className="book-grid"> + data.map(...)
//
// ШАГ 4. Вывод списка:
//   {data.map((book) => <BookCard key={book.id} book={book} />)}
//   key обязателен: React по нему различает элементы списка.
//
// ШАГ 5. Debounce: создай hooks/useDebounce.js и используй:
//   const debounced = useDebounce(text, 300);
//   и передай debounced в queryKey и queryFn вместо text.
//
// ШАГ 6. Поиск в адресной строке (useSearchParams) и пагинация.
//   Это самое сложное, оставь напоследок.

export default function CatalogPage() {
  return (
    <section>
      <h1 className="page-title">Каталог книг</h1>

      <SearchBar />

      {/* Сейчас показан просто макет. Всё, что ниже, замени на условия из ШАГА 3 */}
      <Message />

      <ul className="book-grid">
        <BookCard />
        <BookCard />
        <BookCard />
      </ul>

      {/* ШАГ 6: кнопки листания. disabled у «Назад», если страница первая */}
      <div className="pagination">
        <button className="btn btn--ghost" type="button">← Назад</button>
        <span className="pagination__info">Страница 1</span>
        <button className="btn btn--ghost" type="button">Вперёд →</button>
      </div>
    </section>
  );
}
