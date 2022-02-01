import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const Staff = () => (
  <div className="staff">
    Staff
  </div>
);

export default Staff;
