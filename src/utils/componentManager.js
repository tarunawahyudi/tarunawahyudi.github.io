import objectHash from 'object-hash';

const addedComponents = new Set();

export function createUniqueIdentifier(component) {
  return objectHash(component);
}

export function isComponentAlreadyAdded(identifier) {
  return addedComponents.has(identifier);
}

export function markComponentAsAdded(identifier) {
  addedComponents.add(identifier);
}

export function addComponent(container, html, component) {
  const identifier = createUniqueIdentifier(component);
  if (isComponentAlreadyAdded(identifier)) {
    return;
  }

  markComponentAsAdded(identifier);
  container.insertAdjacentHTML('beforeend', html);
}
