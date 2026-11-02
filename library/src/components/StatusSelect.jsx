// ============================================================
// StatusSelect: выбор статуса книги.
// ============================================================

// ПОДСКАЗКА 1: props: { value, onChange }
//   value    : 'want' | 'reading' | 'done'
//   onChange : функция, получает новый статус
//
// ПОДСКАЗКА 2: у <select> те же два атрибута, что у input:
//   value={value}
//   onChange={(e) => onChange(e.target.value)}
//
// ПОДСКАЗКА 3 (по желанию): варианты можно держать в массиве
// и выводить через .map(), чтобы не дублировать <option>:
//   const STATUSES = [
//     { id: 'want', label: 'Хочу прочитать' }, ...
//   ];
//   {STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}

export default function StatusSelect() {
  return (
    <select className="select" defaultValue="want">
      <option value="want">Хочу прочитать</option>
      <option value="reading">Читаю</option>
      <option value="done">Прочитано</option>
    </select>
  );
}
