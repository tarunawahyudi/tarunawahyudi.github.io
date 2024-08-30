import {addComponent} from "../utils/ComponentManager";

export function createSkillsHtml({ skill, percentage }, index) {
    return `
        <div class="skill clearfix">
            <h4>${skill}</h4>
            <div class="skill-value">${percentage}%</div>
        </div>
        <div class="skill-container skill-${index}">
            <div class="skill-percentage"></div>
        </div>
    `;
}

export function createKnowledgeHtml({ skill }) {
    return `<li>${skill}</li>`
}

export function addSkills(skillData, index, selector) {
    const html = createSkillsHtml(skillData, index);
    const container = document.getElementById(selector);
    addComponent(container, html, skillData);
}

export function addKnowledgeSkills(skillData) {
    const html = createKnowledgeHtml(skillData);
    const container = document.querySelector('.knowledges');
    addComponent(container, html, skillData);
}
