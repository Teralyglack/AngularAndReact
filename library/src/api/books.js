async function searchBooks(query) {
  const response = await fetch('https://openlibrary.org/search.json?q=', encodeURIComponent(query));
  
  if (!response.ok) {
    throw new Error('Ошибка запроса');
  }
  const data = await response.json();
  return data.docs;
}