function Product({ title, price, discount = 0 }) {
  const finalPrice = Math.round(price * (1 - discount / 100));

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
      <h3>{title}</h3>
      <p>
        <b>{finalPrice} ₽</b>
        {discount > 0 && (
          <>
            {' '}
            <s>{price} ₽</s>
            {' '}
            <span>Скидка: {discount}%</span>
          </>
        )}
      </p>
    </div>
  );
}

export default Product;