import initPortfolio from "./initPortfolio";

function imagesLoaded(container, callback) {
  const images = container.getElementsByTagName('img');
  let loadedCount = 0;

  if (images.length === 0) {
    callback(container);
    return;
  }

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === images.length) {
          callback(container);
        }
      });

      img.addEventListener('error', () => {
        loadedCount++;
        if (loadedCount === images.length) {
          callback(container);
        }
      });
    }
  }

  if (loadedCount === images.length) {
    callback(container);
  }
}

function loadPortfolioInit() {
  const portfolioContainer = document.querySelector(".portfolio-grid");
  if (!portfolioContainer) return;

  imagesLoaded(portfolioContainer, () => {
    initPortfolio();
  });
}

export default loadPortfolioInit;
