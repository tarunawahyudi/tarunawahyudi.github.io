import {loadYAML} from "../utils/yamlLoader";
import {addSection as addSectionProfile} from "../components/profileComp";
import {addSection as addSectionAbility} from "../components/abilityComp";

export async function load() {
  try {
    const data = await loadYAML('data/about.yaml');
    const abilities = await loadYAML('data/abilities.yaml');

    data.forEach(item => {
      addSectionProfile(item, 'about-me');
    });

    abilities.forEach(item => {
      addSectionAbility(item, 'ability');
    });
  } catch (error) {
    console.error('Error processing data:', error);
  }
}
