import {loadYAML} from "../utils/yamlLoader";
import {addSection} from "../components/portfolioCategoryComp";
import {addSectionPortfolio} from "../components/portfolioComp";
import {addSection as addSectionDetail} from "../components/portfolioDetailComp";

export async function load() {
  try {
    const portfolios = await loadYAML('data/portfolio.yaml');
    const categories = await loadYAML('data/portfolio_category.yaml');
    categories.forEach(category => {
      addSection(category, 'portfolio-category');
    });

    portfolios.forEach(item => {
      addSectionPortfolio(item, 'portfolio');
    });

  } catch (error) {
    console.error('Error processing data:', error);
  }
}
