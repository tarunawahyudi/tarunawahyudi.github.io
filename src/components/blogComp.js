import {addComponent} from "../utils/componentManager";

function createSection(data) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
          <img src="${data.urlToImage}" class="card-img-top" alt="Article Image">
          <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">By ${data.author}</h6>
              <p class="card-text">${data.description}</p>
              <a href="${data.url}" class="btn btn-primary" target="_blank">Read More</a>
          </div>
          <div class="card-footer text-muted">
              Published on: ${new Date(data.publishedAt).toLocaleDateString()}
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
