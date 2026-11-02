// ============================================================
// SearchBar: поле поиска.
// Сейчас обычный input, в который можно печатать, но он ни с чем не связан.
// ============================================================

// ПОДСКАЗКА 1: сделай поле «управляемым» (controlled).
// Это значит, что значением поля владеет React, а не браузер.
// Компонент получает props: { value, onChange }
//   function SearchBar({ value, onChange }) { ... }
//
// ПОДСКАЗКА 2: в input добавь два атрибута:
//   value={value}
//   onChange={(e) => onChange(e.target.value)}
// e.target.value — это то, что пользователь только что напечатал.
//
// ПОДСКАЗКА 3: сам useState живёт НЕ здесь, а в CatalogPage.
// SearchBar только показывает и сообщает «пользователь что-то ввёл».

export default function SearchBar() {
  return (
    <div className="search">
      <span className="search__icon">🔍</span>
      <input
        className="search__input"
        type="search"
        placeholder="Название книги или автор..."
      />
    </div>
  );
}
