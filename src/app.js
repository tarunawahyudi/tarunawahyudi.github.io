import {routes} from "./routes";

document.addEventListener('DOMContentLoaded', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

async function handleHashChange() {
    const loader = routes[window.location.hash];
    if (loader) await loader();
}
