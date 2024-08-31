import { addComponent } from '../utils/componentManager';

export function createCertificateHtml(certificate) {
    return `
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
                        <span>${certificate.credential ? certificate.credential : ''}</span>
                    </div>
                    ${certificate.date ? `<div class="certi-date"><span>${certificate.date}</span></div>` : ''}
                     <div class="certi-link">
                        <span>
                            ${certificate.imgSrc ? 
                            `<a href="${certificate.imgSrc}" data-lightbox="image-1" data-title="${certificate.title}">${certificate.linkTitle}</a>` 
                            : `<a href="${certificate.link}" target="_blank">${certificate.linkTitle}</a>`}
                        </span>
                    </div>
                    <div class="certi-company">
                        <span>${certificate.company}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function addCertificate(certificate) {
    const certificateHtml = createCertificateHtml(certificate);
    const container = document.getElementById('certificates-container');

    addComponent(container, certificateHtml, certificate);
}
