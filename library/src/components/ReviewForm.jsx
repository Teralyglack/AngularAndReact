// ============================================================
// ReviewForm: форма «оценка и заметка» (React Hook Form + Zod).
// Сейчас статичная разметка. Логику добавим в самом конце проекта,
// когда всё остальное заработает.
// ============================================================

// ПЛАН (делай по порядку, по одному шагу):
//
// ШАГ 1. Сначала напиши schemas/reviewSchema.js:
//   import { z } from 'zod';
//   export const reviewSchema = z.object({
//     rating: z.coerce.number().int().min(1, '...').max(5, '...'),
//     note:   z.string().max(500, '...'),
//   });
//   export const defaultReviewValues = { rating: 5, note: '' };
//   (z.coerce.number() нужен, потому что поле формы возвращает строку.)
//
// ШАГ 2. В этом файле импортируй:
//   import { useForm } from 'react-hook-form';
//   import { zodResolver } from '@hookform/resolvers/zod';
//
// ШАГ 3. Внутри компонента вызови useForm по образцу из твоего документа
//   (файл TaskForm.jsx): resolver, mode, defaultValues.
//   Из результата возьми: register, handleSubmit, formState: { errors }.
//
// ШАГ 4. К каждому полю добавь {...register('rating')} и {...register('note')}.
//
// ШАГ 5. К <form> добавь onSubmit={handleSubmit(onSubmit)},
//   где onSubmit приходит из props и получает объект { rating, note }.
//
// ШАГ 6. Под полями выводи ошибки:
//   {errors.rating && <p className="form__error">{errors.rating.message}</p>}

export default function ReviewForm() {
  return (
    <form className="form" noValidate>
      <div className="form__field">
        <label className="form__label" htmlFor="rating">Оценка (от 1 до 5)</label>
        <input className="form__input" id="rating" type="number" min="1" max="5" />
        {/* сюда: ошибка для rating */}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="note">Заметка</label>
        <textarea className="form__textarea" id="note" rows="4" placeholder="Что думаешь о книге?" />
        {/* сюда: ошибка для note */}
      </div>

      <button className="btn btn--primary" type="submit">Сохранить</button>
    </form>
  );
}
