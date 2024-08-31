import {addComponent} from "../utils/componentManager";

function createExperienceSection(experience) {
  return `
    <div class="timeline-item clearfix">
      <div class="left-part">
        <h5 class="item-period">${experience.year}</h5>
        <span class="item-company">${experience.company}</span>
      </div>
      <div class="divider"></div>
      <div class="right-part">
        <h4 class="item-title">${experience.position}</h4>
        <ul>
            ${experience.job_description.map(description => `<li>${description}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

export function addExperienceSection(data, selector) {
  const html = createExperienceSection(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
