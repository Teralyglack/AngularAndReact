import ThemeSelect from '../components/ThemeSelect';

// ============================================================
// SettingsPage: тема и сброс данных.
// ============================================================

// ПОДСКАЗКА 1: ThemeSelect сам работает с контекстом, тут трогать нечего.
//
// ПОДСКАЗКА 2 (свой цвет, бонус): поле выбора цвета.
//   const [color, setColor] = useState('#a855f7');
//   <input type="color" value={color} onChange={(e) => ...} />
//   При изменении: document.documentElement.style.setProperty('--accent', e.target.value)
//   Чтобы цвет запоминался, храни его через useLocalStorage.
//
// ПОДСКАЗКА 3: сброс данных с подтверждением:
//   function handleReset() {
//     if (window.confirm('Удалить все сохранённые книги?')) {
//       resetLibrary();   // из useLibrary()
//     }
//   }
//   <button onClick={handleReset}>

export default function SettingsPage() {
  return (
    <section>
      <h1 className="page-title">Настройки</h1>

      <div className="settings-card">
        <h2 className="settings-card__title">Тема оформления</h2>
        <p className="settings-card__text">Выбери цветовую схему сайта.</p>
        <ThemeSelect />
      </div>

      <div className="settings-card">
        <h2 className="settings-card__title">Свой акцентный цвет</h2>
        <p className="settings-card__text">Перекрасит кнопки и заголовки в выбранный цвет.</p>
        <input className="color-input" type="color" defaultValue="#a855f7" />
      </div>

      <div className="settings-card settings-card--danger">
        <h2 className="settings-card__title">Сброс данных</h2>
        <p className="settings-card__text">Удалит все книги из «Моей библиотеки». Это нельзя отменить.</p>
        <button className="btn btn--danger" type="button">Сбросить все данные</button>
      </div>
    </section>
  );
}
