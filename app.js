const recommended = document.querySelector('.recommended');
const featured = document.querySelector('.featured');
const books = document.querySelector('.books');
const rBooks = document.querySelector('.r-books');
const heading = document.querySelector('.book-heading');
const genre = document.querySelector('.genre-filter');

recommended.addEventListener('click', () => {
  books.style.display = 'none';
  rBooks.style.display = 'block';
  heading.textContent = 'Recommendations';
  featured.classList.remove('active-link');
  recommended.classList.add('active-link');
  genre.textContent = 'Fiction';
});

featured.addEventListener('click', () => {
  books.style.display = 'block';
  rBooks.style.display = 'none';

  heading.textContent = 'Featured';
  recommended.classList.remove('active-link');
  featured.classList.add('active-link');
  genre.textContent = 'Nonfiction';
});
