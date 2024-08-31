import {addComponent} from '../utils/componentManager';

export function createMenu(menu) {
  return `
      <li>
        <a href="#${menu.link}" class="nav-anim">
          <span class="menu-icon lnr ${menu.icon}"></span>
          <span class="link-text">${menu.title}</span>
        </a>
      </li>
  `;
}

export function addMenu(data, selector) {
  const html = createMenu(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
