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
    const skillHtml = createSkillsHtml(skillData, index);
    const skillContainer = document.getElementById(selector);
    if (skillContainer) skillContainer.insertAdjacentHTML('beforeend', skillHtml);
    else console.error('Skill container not found');
}

export function addKnowledgeSkills(skillData) {
    const knowledgeHtml = createKnowledgeHtml(skillData);
    const container = document.querySelector('.knowledges');
    container.insertAdjacentHTML('beforeend', knowledgeHtml);
}
