import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const News = () => (
  <div className="news">
    News
  </div>
);

