import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const InnerMain = () => (
  <div className="innerMain">
    InnerMain
  </div>
);

export default InnerMain;
