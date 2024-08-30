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

export function addSkills(skillData, index) {
    console.log(skillData);
    

    const skillHtml = createSkillsHtml(skillData, index);
    const skillContainer = document.querySelector('.skills-section');
    
    if (skillContainer) {
        skillContainer.insertAdjacentHTML('beforeend', skillHtml);
    } else {
        console.error('Skill container not found');
    }
}