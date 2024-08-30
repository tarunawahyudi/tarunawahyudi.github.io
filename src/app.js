import { loadYAML } from './utils/yamlLoader';
import { addCertificate } from './components/certificates';

document.addEventListener('DOMContentLoaded', () => {
    loadYAML('data/certificates.yaml')
        .then(certificates => {
            certificates.forEach(certificate => {
                addCertificate(certificate);
            });
        })
        .catch(error => console.error('Error processing certificates:', error));
});
