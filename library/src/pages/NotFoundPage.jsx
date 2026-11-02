import { Link } from 'react-router-dom';

// ============================================================
// NotFoundPage: 404. Стоит ВНЕ Layout, поэтому без шапки.
// Здесь логики нет, страница готова.
// ============================================================

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <h1>Страница не найдена</h1>
      <p className="not-found__text">Похоже, такой книги на наших полках нет.</p>
      <Link to="/" className="btn btn--primary">На главную</Link>
    </div>
  );
}
