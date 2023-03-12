const url = 'https://www.linkedin.com/search/results/learning/?difficultyLevel=%5B%22Advanced%22%5D&keywords=programming&origin=FACETED_SEARCH&sid=dt4';

axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
  .then(response => {
    const html = response.data.contents;
    console.log(html);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const resultsContainer = document.getElementById('linkedin-results');
    const searchResults = doc.querySelectorAll('.search-results__list > li');
    searchResults.forEach(result => resultsContainer.appendChild(result));
  })
  .catch(error => console.error(error));
