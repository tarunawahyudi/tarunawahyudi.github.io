import {loadYAML} from "../utils/yamlLoader";
import {addCertificate} from "../components/certificateComp";

export async function load() {
  try {
    const certificates = await loadYAML('data/certificates.yaml');
    certificates.forEach(certificate => {
      addCertificate(certificate);
    });
  } catch (error) {
    console.error('Error processing data:', error);
  }
}
