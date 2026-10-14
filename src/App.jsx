import Greeting from './Greeting';
import Product from './Product';
import Avatar from './Avatar';
import Card from './Card';
import Button from './Button';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>1. Greeting</h2>
      <Greeting name="Иван" />
      <Greeting name="Мария" greeting="Добрый день" />
      <Greeting />

      <h2>2. Product</h2>
      <Product title="Наушники" price={5000} />
      <Product title="Клавиатура" price={3000} discount={20} />

      <h2>3. Avatar</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar name="Анна" size={32} />
        <Avatar name="Борис" />
        <Avatar name="Вера" size={80} />
      </div>

      <h2>4. Card</h2>
      <Card title="Описание">
        <p>Просто текст внутри карточки.</p>
      </Card>
      <Card title="Список дел">
        <ul>
          <li>Выучить пропсы</li>
          <li>Сделать компоненты</li>
        </ul>
        <button onClick={() => alert('Привет!')}>Нажми меня</button>
      </Card>

      <h2>5. Button</h2>
      <Button>Primary (по умолчанию)</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger" onClick={() => alert('Удалено!')}>
        Danger
      </Button>
      <Button disabled>Отключена</Button>
    </div>
  );
}

export default App;