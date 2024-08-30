// import jsyaml from 'js-yaml';

document.addEventListener('DOMContentLoaded', () => {
    fetch('storage/certificates.json')
        .then(response => response.json())
        // .then(response => response.text())
        .then(/* yamlText */ certificates => {
            // const certificates = jsyaml.load(yamlText);
            certificates.forEach(certificate => {
                addCertificate(certificate);
            });
        })
        .catch(error => console.error('Error loading certificates:', error));
});

function addCertificate(certificate) {
    
    const certificateHtml = `
        <div class="col-xs-12 col-sm-6">
            <div class="certificate-item clearfix">
                <div class="certi-logo">
                    <img src="${certificate.logoSrc}" alt="logo">
                </div>
                <div class="certi-content">
                    <div class="certi-title">
                        <h4>${certificate.title}</h4>
                    </div>
                    <div class="certi-id">
                        <span>${certificate.id}</span>
                    </div>
                    ${certificate.date ? `<div class="certi-date"><span>${certificate.date}</span></div>` : ''}
                    <div class="certi-link">
                        <span><a href="${certificate.link}" data-lightbox="image-1" data-title="${certificate.title}">${certificate.linkTitle}</a></span>
                    </div>
                    <div class="certi-company">
                        <span>${certificate.company}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById('certificates-container');
    container.insertAdjacentHTML('beforeend', certificateHtml);
}