import { memo } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// BookCard: одна карточка книги.
// Сейчас показывает ОДНУ и ту же книгу-заглушку.
// Твоя задача: заставить показывать ту книгу, которую передали.
// ============================================================

// ПОДСКАЗКА 1: компонент получает props. Это объект, который React
// передаёт первым аргументом. Достань нужное через деструктуризацию:
//   function BookCard({ book, onAdd, isAdded }) { ... }
//   book    : { id, title, author, year, coverUrl }
//   onAdd   : функция, вызывается при клике «Добавить»
//   isAdded : true/false, книга уже в библиотеке?

function BookCard() {
  // ПОДСКАЗКА 2: уберёт лишнюю работу, если сразу дать короткие имена:
  // const { id, title, author, year, coverUrl } = book;

  return (
    <li className="book-card">
      {/* ПОДСКАЗКА 3: ссылка ведёт на страницу деталей.
          Адрес с переменной пишется через обратные кавычки:
          to={`/books/${id}`} */}
      <Link to="/books/OL0W">
        {/* ПОДСКАЗКА 4: если coverUrl есть, покажи <img>, иначе заглушку.
            В JSX это условие через тернарный оператор:
            {coverUrl ? <img ... /> : <div ...>📖</div>}
            Атрибуты для img: className="book-card__cover" src={coverUrl} alt={title} */}
        <div className="book-card__cover book-card__cover--empty">📖</div>
      </Link>

      <div className="book-card__body">
        <Link to="/books/OL0W" className="book-card__title">Название книги</Link>
        <p className="book-card__author">Автор</p>
        <p className="book-card__year">1999</p>

        <div className="book-card__actions">
          {/* ПОДСКАЗКА 5: кнопка вызывает функцию из props:
              onClick={() => onAdd(book)}
              Если isAdded true, сделай кнопку disabled
              и поменяй текст на «В библиотеке ✓». */}
          <button className="btn btn--primary btn--small" type="button">
            Добавить
          </button>
        </div>
      </div>
    </li>
  );
}

// ПОДСКАЗКА 6 (на этапе оптимизации): memo не даёт карточке
// перерисовываться, если её props не изменились.
export default memo(BookCard);
