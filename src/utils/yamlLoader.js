import jsyaml from 'js-yaml';

export async function loadYAML(url) {
    try {
        const response = await fetch(url);
        const yamlText = await response.text();
        return jsyaml.load(yamlText);
    } catch (error) {
        console.error('Error loading YAML:', error);
        throw error;
    }
}
