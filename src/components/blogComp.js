import {addComponent} from "../utils/componentManager";

function createSection(data) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
          <img src="${data.thumbnail}" class="card-img-top" alt="Article Image">
          <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.description}</p>
              <a href="${data.link}" class="btn btn-primary" target="_blank">Read More</a>
          </div>
          <div class="card-footer text-muted">
              Published on: ${new Date(data.pubDate).toLocaleDateString()}
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
