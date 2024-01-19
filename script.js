const quotes = [
    {
      quote: 'The only way to do great work is to love what you do. - Steve Jobs',
      favorite: false,
    },
    {
      quote: 'Believe you can and you’re halfway there. - Theodore Roosevelt',
      favorite: false,
    },
    {
      quote: 'Don’t watch the clock; do what it does. Keep going. - Sam Levenson',
      favorite: false,
    },
    {
      quote: 'You miss 100% of the shots you do not take. - Wayne Gretzky',
      favorite: false,
    },
  ];
  
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = document.getElementById('quote');
  const generateBtn = document.getElementById('generate-btn');
  const favoriteBtn = document.getElementById('favorite-btn');
  const favoritesContainer = document.getElementById('favorites-container');
  const favoritesList = document.getElementById('favorites-list');
  
  function generateQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].quote;
  }
  
  function toggleFavorite() {
    quotes[index].favorite = !quotes[index].favorite;
    updateFavorites();
  }
  
  function updateFavorites() {
    favoritesList.innerHTML = '';
    quotes
      .filter((quote) => quote.favorite)
      .forEach((quote) => {
        const li = document.createElement('li');
        li.textContent = quote.quote;
        favoritesList.appendChild(li);
      });
  
    if (quotes.some((quote) => quote.favorite)) {
      favoritesContainer.style.display = 'block';
    } else {
      favoritesContainer.style.display = 'none';
    }
  }
  
  generateBtn.addEventListener('click', generateQuote);
  favoriteBtn.addEventListener('click', toggleFavorite);
  
  generateQuote();
  updateFavorites();
