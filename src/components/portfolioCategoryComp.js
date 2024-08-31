import {addComponent} from "../utils/componentManager";

export function createPortfolioCategory(category) {
  return `
    <li>
      <a class="filter btn btn-sm btn-link" data-group="${category.group}">${category.name}</a>
    </li>
  `;
}

export function addSection(data, selector) {
  const html = createPortfolioCategory(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
