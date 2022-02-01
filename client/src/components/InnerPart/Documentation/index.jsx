import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const Documentation = () => (
  <div className="documentation">
    Documentation
  </div>
);

export default Documentation;
