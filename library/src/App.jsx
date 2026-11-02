// 1. Импорты
import { Routes, Route } from 'react-router-dom';
// импортируй Layout из './components/Layout'
import Layout from './components/Layout'
// импортируй шесть страниц из './pages/...':
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import BookDetailPage from './pages/BookDetailPage'
import LibraryPage from './pages/LibraryPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
// HomePage, CatalogPage, BookDetailPage, LibraryPage, SettingsPage, NotFoundPage


// 2. Компонент
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<CatalogPage />} />
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Страница 404, снаружи группы, без шапки */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}