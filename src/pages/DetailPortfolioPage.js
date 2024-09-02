import {addSection} from "../components/portfolioDetailComp";

export async function load() {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(event) {
      if (event.target.closest('.portfolio-item-img')) {
        const itemId = event.target.closest('.portfolio-item-img').getAttribute('data-id');
        addSection(itemId, 'ajax-page');
      }
    });
  });
}
