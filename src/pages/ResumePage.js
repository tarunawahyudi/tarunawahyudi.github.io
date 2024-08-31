import { loadYAML } from '../utils/yamlLoader.js';
import { addKnowledgeSkills, addSkills } from '../components/skillComp.js';
import {addSection} from "../components/educationComp";
import {addAwardSection} from "../components/awardComp";
import {addExperienceSection} from "../components/experienceComp";

export async function load() {

  try {
    const skillsData = await loadYAML('data/skills.yaml');
    const education = await loadYAML('data/education.yaml');
    const awards = await loadYAML('data/awards.yaml');
    const experiences = await loadYAML('data/experiences.yaml');

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


    const formal = education.find(item => item.formal)?.formal;
    const nonFormal = education.find(item => item.non_formal)?.non_formal;

    if (formal) {
      formal.forEach(item => {
        addSection(item, 'formal-education');
      })
    }

    if (nonFormal) {
      nonFormal.forEach(item => {
        addSection(item, 'non-formal-education');
      });
    }

    awards.forEach(item => {
      addAwardSection(item, 'awards');
    });

    experiences.forEach(item => {
      addExperienceSection(item, 'experience');
    })
  } catch (error) {
    console.error('Error processing data:', error);
  }
}
