import {addComponent} from "../utils/componentManager";

function createSection(data) {
  return `
    <div class="col-xs-12 col-sm-6">
      <div class="col-inner">
        <div class="info-list-w-icon">
          <div class="info-block-w-icon">
            <div class="ci-icon">
              <i class="lnr ${data.icon}"></i>
            </div>
            <div class="ci-text">
              <h4>${data.title}</h4>
              <p>${data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function addSection(data, selector) {
  const html = createSection(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
