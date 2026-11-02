import StatusSelect from '../components/StatusSelect';
import ReviewForm from '../components/ReviewForm';

// ============================================================
// BookDetailPage: страница одной книги (/books/:id).
// ============================================================

// ПЛАН ПО ШАГАМ:
//
// ШАГ 1. Достань id из адреса:
//   import { useParams, useNavigate } from 'react-router-dom';
//   const { id } = useParams();
//   Проверь: console.log(id) показывает что-то вроде OL27448W.
//
// ШАГ 2. Загрузи книгу:
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['book', id],
//     queryFn: () => getBook(id),
//   });
//
// ШАГ 3. Кнопка «Назад»:
//   const navigate = useNavigate();
//   <button onClick={() => navigate(-1)}>   (-1 значит «на шаг назад»)
//
// ШАГ 4. Если isLoading или isError, верни <Message .../> вместо страницы
//   и добавь ссылку на каталог (как в TaskDetailPage из твоего документа).
//
// ШАГ 5. Подставь данные книги вместо текстов-заглушек:
//   title, описание (у API описание бывает СТРОКОЙ или ОБЪЕКТОМ {value: '...'},
//   открой в браузере https://openlibrary.org/works/OL27448W.json
//   и проверь, как у тебя; обработай оба случая).
//
// ШАГ 6. Блок «Моя оценка» показывай, только если книга уже в библиотеке
//   (isInLibrary(id) из LibraryContext).

export default function BookDetailPage() {
  return (
    <article className="detail">
      <button className="btn btn--ghost" type="button">← Назад</button>

      <div className="detail__main">
        <div className="detail__cover detail__cover--empty">📖</div>

        <div className="detail__info">
          <h1 className="detail__title">Название книги</h1>
          <p className="detail__meta">Автор · 1999</p>
          <p className="detail__description">
            Здесь будет описание книги из Open Library.
          </p>

          <div className="detail__actions">
            <button className="btn btn--primary" type="button">Добавить в библиотеку</button>
            <StatusSelect />
          </div>
        </div>
      </div>

      <section className="detail__review">
        <h2 className="section-title">Моя оценка и заметка</h2>
        <ReviewForm />
      </section>
    </article>
  );
}
