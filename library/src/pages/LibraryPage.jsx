import { Link } from 'react-router-dom';
import StatusSelect from '../components/StatusSelect';
import Message from '../components/Message';

// ============================================================
// LibraryPage: «Моя библиотека». Сохранённые книги + фильтр по статусу.
// ============================================================

// ПЛАН ПО ШАГАМ:
//
// ШАГ 1. Достань книги из контекста:
//   const { library, removeBook, setStatus } = useLibrary();
//
// ШАГ 2. Фильтр в адресе (/library?status=reading):
//   const [searchParams, setSearchParams] = useSearchParams();
//   const status = searchParams.get('status') || 'all';
//   Смена фильтра: setSearchParams({ status: 'reading' })
//   Для «Все» очисти параметр: setSearchParams({})
//
// ШАГ 3. Отфильтруй массив:
//   const visible = status === 'all'
//     ? library
//     : library.filter((book) => book.status === status);
//   Позже оберни это в useMemo (зависимости: library, status).
//
// ШАГ 4. Подсветка активного фильтра: добавь класс filter-btn--active
//   той кнопке, чей статус совпадает с текущим.
//
// ШАГ 5. Выведи visible через .map(). Если пусто, покажи <Message type="empty" .../>.

export default function LibraryPage() {
  return (
    <section>
      <h1 className="page-title">Моя библиотека</h1>

      <div className="filters">
        <button className="filter-btn filter-btn--active" type="button">Все</button>
        <button className="filter-btn" type="button">Хочу прочитать</button>
        <button className="filter-btn" type="button">Читаю</button>
        <button className="filter-btn" type="button">Прочитано</button>
      </div>

      {/* Пустое состояние: покажи его, когда книг нет */}
      <Message />

      <ul className="library-list">
        {/* ЭТО ОДНА СТРОКА СПИСКА. Размножь её через .map() */}
        <li className="library-item">
          <div className="library-item__cover" />
          <div className="library-item__info">
            <Link to="/books/OL0W" className="library-item__title">Название книги</Link>
            <p className="library-item__author">Автор</p>
          </div>
          <div className="library-item__actions">
            <StatusSelect />
            <button className="btn btn--danger btn--small" type="button">Удалить</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
