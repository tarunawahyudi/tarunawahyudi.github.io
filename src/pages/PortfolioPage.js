import {loadYAML} from "../utils/yamlLoader";
import {addSection} from "../components/portfolioCategoryComp";


export async function load() {
  try {
    const categories = await loadYAML('data/portfolio_category.yaml');
    categories.forEach(category => {
      addSection(category, 'portfolio-category');
    });
  } catch (error) {
    console.error('Error processing data:', error);
  }
}
