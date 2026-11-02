import { NavLink, Outlet } from 'react-router-dom';

// ============================================================
// Layout: шапка + место для страниц.
// Это ОБЩАЯ рамка. Страницы подставляются вместо <Outlet />.
// ============================================================

export default function Layout() {
  // ПОДСКАЗКА 1 (позже, когда будет LibraryContext):
  // const { library } = useLibrary();
  // и ниже вместо цифры 0 покажи library.length

  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <NavLink to="/" className="logo">📚 Моя библиотека</NavLink>

          <nav className="nav">
            {/* ПОДСКАЗКА 2: NavLink сам знает, активна ли ссылка.
                Чтобы подсветить активную, className принимает ФУНКЦИЮ:
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                Сейчас стоит простой вариант. Замени его на функцию.
                Для ссылки на "/" добавь атрибут end, иначе она будет
                активна на всех страницах. */}
            <NavLink to="/" className="nav-link" end>Главная</NavLink>
            <NavLink to="/books" className="nav-link">Каталог</NavLink>
            <NavLink to="/library" className="nav-link">Моя библиотека</NavLink>
            <NavLink to="/settings" className="nav-link">Настройки</NavLink>
          </nav>

          <span className="header__counter">📖 0</span>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">Учебный проект · данные: Open Library</footer>
    </div>
  );
}
