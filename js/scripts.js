const url = 'https://www.linkedin.com/search/results/learning/?difficultyLevel=%5B%22Advanced%22%5D&keywords=programming&origin=FACETED_SEARCH&sid=dt4';

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const results = [];
    $('.search-results__result-item').each((i, elem) => {
      const title = $(elem).find('.result-lockup__title').text().trim();
      const author = $(elem).find('.result-lockup__metadata-author').text().trim();
      const level = $(elem).find('.result-lockup__metadata-level').text().trim();
      const duration = $(elem).find('.result-lockup__metadata-duration').text().trim();
      const image = $(elem).find('.result-lockup__image').attr('src');
      const url = $(elem).find('.result-lockup__link').attr('href');
      results.push({ title, author, level, duration, image, url });
    });
    const markup = results.map(result => `
      <div class="course">
        <img src="${result.image}" alt="${result.title}">
        <div>
          <h2>${result.title}</h2>
          <p>Author: ${result.author}</p>
          <p>Difficulty Level: ${result.level}</p>
          <p>Duration: ${result.duration}</p>
          <a href="${result.url}" target="_blank">View Course</a>
        </div>
      </div>
    `).join('');
    $('#results').html(markup);
  })
  .catch(error => {
    console.log(error);
  });
