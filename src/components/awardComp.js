import {addComponent} from "../utils/componentManager";

export function createAwardSection(award) {
  return `
    <div class="timeline-item clearfix">
      <div class="left-part">
        <h5 class="item-period">${award.year}</h5>
        <span class="item-company">${award.institute}</span>
      </div>
      <div class="divider"></div>
      <div class="right-part">
        <h4 class="item-title">${award.title}</h4>
        <p>${award.description ? award.description : ''}</p>
      </div>
    </div>
  `;
}

export function addAwardSection(data, selector) {
  const html = createAwardSection(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
