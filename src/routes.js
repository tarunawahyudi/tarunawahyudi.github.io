import {load as loadHome} from './pages/HomePage';
import {load as loadResume} from './pages/ResumePage';
import {load as loadCertificate} from './pages/CertificatePage';
import {load as loadPortfolioCategory} from './pages/PortfolioPage';
import {load as loadAboutMe} from './pages/AboutPage';

export const routes = {
  '#resume': loadResume,
  '#home': loadHome,
  '#certificates': loadCertificate,
  '#portfolio': loadPortfolioCategory,
  '#about-me': loadAboutMe
}
