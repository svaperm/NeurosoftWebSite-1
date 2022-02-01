import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const News = () => (
  <div className="news">
    News
  </div>
);

export default News;
