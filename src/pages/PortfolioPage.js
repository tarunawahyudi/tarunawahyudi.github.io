import {loadYAML} from "../utils/yamlLoader";
import {addSection} from "../components/portfolioCategoryComp";
import {addSectionPortfolio} from "../components/portfolioComp";


export async function load() {
  try {
    const portfolios = await loadYAML('data/portfolio.yaml');
    const categories = await loadYAML('data/portfolio_category.yaml');
    categories.forEach(category => {
      addSection(category, 'portfolio-category');
    });

    console.log(portfolios);
    portfolios.forEach(item => {
      addSectionPortfolio(item, 'portfolio');
    });

  } catch (error) {
    console.error('Error processing data:', error);
  }
}
