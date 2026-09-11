(() => {
  const list = document.querySelector('#published-reviews');
  const empty = document.querySelector('#reviews-empty');
  if (!list || !empty) return;
  const data = Array.isArray(window.APPROVED_REVIEWS) ? window.APPROVED_REVIEWS : [];
  const approved = data.filter(review => review && typeof review.name === 'string' && review.name.trim() && typeof review.text === 'string' && review.text.trim() && Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5);
  for (const review of approved) {
    const card = document.createElement('article');
    card.className = 'published-review';
    const name = document.createElement('h2');
    name.textContent = review.name;
    const rating = document.createElement('p');
    rating.className = 'review-rating';
    rating.textContent = `${review.rating} out of 5 stars`;
    const quote = document.createElement('blockquote');
    quote.textContent = review.text;
    const service = document.createElement('p');
    service.className = 'review-service';
    service.textContent = typeof review.service === 'string' ? review.service : '';
    card.append(name, rating, quote, service);
    list.append(card);
  }
  empty.hidden = approved.length > 0;
})();
