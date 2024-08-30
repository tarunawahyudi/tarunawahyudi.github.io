import {load as loadHome} from './pages/HomePage';
import {load as loadResume} from './pages/ResumePage';
import {load as loadCertificate} from './pages/CertificatePage';

export const routes = {
  '#resume': loadResume,
  '#home': loadHome,
  '#certificates': loadCertificate
}
