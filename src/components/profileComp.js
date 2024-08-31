import {addComponent} from "../utils/componentManager";

function createSection(data) {
  return `
    <li>
      <span class="title">${data.key}</span>
      <span class="value">${data.value}</span>
    </li>
  `;
}

export function addSection(data, selector) {
  const html = createSection(data);
  const container = document.getElementById(selector);

  addComponent(container, html, data);
}
