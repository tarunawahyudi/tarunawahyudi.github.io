import {addComponent} from "../utils/componentManager";
import loadPortfolioInit from "../services/portfolio/portfolioLoader";

function createHtml(data) {
  const dataGroups = JSON.stringify(data.dataGroups).replace(/"/g, '&quot;');
  return `
        <figure class="item standard" data-groups='${dataGroups}'>
          <div class="portfolio-item-img">
            <img src="${data.imgSrc}" alt="${data.imgAlt}" title="${data.imgTitle}" />
            <a href="pages/${data.link}.html" class="ajax-page-load"></a>
          </div>

          <i class="fa fa-file-alt"></i>
          <h4 class="name">${data.title}</h4>
          <span class="category">${data.label}</span>
        </figure>
  `
}

export function addSectionPortfolio(data, selector) {
  const html = createHtml(data);
  const container = document.getElementById(selector);
  addComponent(container, html, data);

  loadPortfolioInit();
}
