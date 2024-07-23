function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data); // Call renderBooks with the fetched data
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Assuming book objects have a 'name' property
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Trigger fetchBooks when DOM content is loaded
});
