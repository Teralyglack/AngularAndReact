import { Link } from 'react-router-dom';

// ============================================================
// HomePage: главная. Приветствие и четыре счётчика.
// ============================================================

// ПОДСКАЗКА 1 (когда будет LibraryContext):
//   const { library } = useLibrary();
//
// ПОДСКАЗКА 2: счётчики считаются из массива library через .filter():
//   const reading = library.filter((book) => book.status === 'reading').length;
// Аналогично для 'want' и 'done'. Всего книг: library.length.
//
// ПОДСКАЗКА 3: подставь числа в <span className="stat-card__value">
// вместо нулей через фигурные скобки: {reading}.

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1 className="hero__title">Твоя личная библиотека</h1>
        <p className="hero__text">
          Ищи книги, сохраняй их в свою подборку, отмечай, что прочитано, и оставляй заметки.
        </p>
        <Link to="/books" className="btn btn--primary">Перейти в каталог</Link>
      </section>

      <section className="stats">
        <div className="stat-card">
          <span className="stat-card__value">0</span>
          <span className="stat-card__label">Всего книг</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">0</span>
          <span className="stat-card__label">Хочу прочитать</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">0</span>
          <span className="stat-card__label">Читаю сейчас</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">0</span>
          <span className="stat-card__label">Прочитано</span>
        </div>
      </section>
    </div>
  );
}
