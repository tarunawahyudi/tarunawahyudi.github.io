import {routes} from './routes';
import {loadYAML} from "./utils/yamlLoader";
import {addMenu} from "./components/menuComp";

document.addEventListener('DOMContentLoaded', handler);
window.addEventListener('hashchange', handler);

async function handler() {
    await loadMenu();
    const loader = routes[window.location.hash];
    if (loader) await loader();
}

async function loadMenu() {
    try {
        const menus = await loadYAML('/data/menus.yaml');
        menus.forEach((item) => {
            addMenu(item, 'menu');
        });
    } catch (error) {
        console.error('Error processing data:', error);
    }
}
