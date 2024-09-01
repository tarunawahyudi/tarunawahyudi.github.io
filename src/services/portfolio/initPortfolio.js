import Shuffle from 'shufflejs';

function initPortfolio() {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const portfolioFilters = document.querySelector('.portfolio-filters');

  if (!portfolioGrid || !portfolioFilters) {
    return;
  }

  const shuffleInstance = new Shuffle(portfolioGrid, {
    speed: 450,
    itemSelector: 'figure'
  });

  portfolioFilters.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter')) {
      event.preventDefault();
      portfolioFilters.querySelectorAll('.filter').forEach((filter) => {
        filter.parentElement.classList.remove('active');
      });
      event.target.parentElement.classList.add('active');
      const group = event.target.getAttribute('data-group');
      shuffleInstance.filter(group);
    }
  });
}

export default initPortfolio;
