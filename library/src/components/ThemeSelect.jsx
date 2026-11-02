// ============================================================
// ThemeSelect: выбор темы оформления.
// Сейчас четыре кнопки, которые ничего не делают.
// ============================================================

// ПОДСКАЗКА 1: когда будет ThemeContext, достань из него
//   const { theme, setTheme } = useTheme();
//
// ПОДСКАЗКА 2: клик по кнопке: onClick={() => setTheme('dark')}
//
// ПОДСКАЗКА 3: подсвети выбранную тему: если theme === id,
// добавь к кнопке класс theme-option--active.
//
// ПОДСКАЗКА 4 (когда заработает): четыре почти одинаковые кнопки
// это повод заменить их на .map() по массиву THEMES из constants/themes.js.
// Тогда новая тема добавляется в одном месте, а не в двух.
// Класс кружка строится так: `theme-option__swatch swatch--${id}`.

export default function ThemeSelect() {
  return (
    <div className="theme-options">
      <button className="theme-option theme-option--active" type="button">
        <span className="theme-option__swatch swatch--light" />
        Сирень
      </button>
      <button className="theme-option" type="button">
        <span className="theme-option__swatch swatch--dark" />
        Ночная орхидея
      </button>
      <button className="theme-option" type="button">
        <span className="theme-option__swatch swatch--rose" />
        Пудра
      </button>
      <button className="theme-option" type="button">
        <span className="theme-option__swatch swatch--grape" />
        Виноград
      </button>
    </div>
  );
}
