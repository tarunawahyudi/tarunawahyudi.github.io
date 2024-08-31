import {addComponent} from "../utils/componentManager";

export function createSection(education) {
  return `
    <div class="timeline-item clearfix">
      <div class="left-part">
        <h5 class="item-period">${education.year}</h5>
        <span class="item-company">${education.school ? education.school : education.institute}</span>
      </div>
      <div class="divider"></div>
      <div class="right-part">
        <h4 class="item-title">${education.expertise}</h4>
        <p>${education.description ? education.description : `<a target="_blank" href="${education.certificate}">See Certificate</a>`}</p>
      </div>
    </div>
  `;
}

export function addSection(data, selector) {
  const html = createSection(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
