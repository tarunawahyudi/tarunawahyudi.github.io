import { loadYAML } from '../utils/yamlLoader.js';
import { addKnowledgeSkills, addSkills } from '../components/skills.js';

export async function load() {

  try {
    const skillsData = await loadYAML('data/skills.yaml');
    const programming = skillsData.find(item => item.programming)?.programming;
    const fundamental = skillsData.find(item => item.fundamental)?.fundamental;
    const technical = skillsData.find(item => item.technical)?.technical;
    const knowledge = skillsData.find(item => item.knowledge)?.knowledge;

    if (programming) {
      programming.forEach((item, index) => {
        addSkills(item, index, 'programming-skills');
      });
    }

    if (fundamental) {
      fundamental.forEach((item, index) => {
        addSkills(item, index, 'fundamental-skills');
      });
    }

    if (technical) {
      technical.forEach((item, index) => {
        addSkills(item, index, 'technical-skills');
      });
    }

    if (knowledge) {
      knowledge.forEach(item => {
        addKnowledgeSkills(item);
      });
    }
  } catch (error) {
    console.error('Error processing skills:', error);
  }
}
