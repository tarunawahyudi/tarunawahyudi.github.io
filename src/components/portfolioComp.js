import {addComponent} from "../utils/componentManager";

function createHtml(data) {
  const dataGroups = JSON.stringify(data.dataGroups).replace(/"/g, '&quot;');
  return `
    <figure class="item ${data.figureClass} shuffle-item filtered" data-groups='["category_all", "category_soundcloud"]'>
      <div class="portfolio-item-img">
        <img src="${data.imgSrc}" alt="${data.imgAlt}" title='${data.imgTitle}' />
        <a href="${data.linkUrl}" class="lightbox mfp-iframe" title="${data.linkTitle}"></a>
      </div>
  
      <i class="fa fa-volume-up"></i>
      <h4 class="name">${data.title}</h4>
      <span class="category">${data.label}</span>
    </figure>
  `
}

export function addSectionPortfolio(data, selector) {
  const html = createHtml(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);
}
