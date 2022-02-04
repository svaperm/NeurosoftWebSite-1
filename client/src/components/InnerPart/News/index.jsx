import './style.css';
import NewsItem from './components/NewsItem'

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const News = () => (
  <div className="news">
    <div className='news-container'>
      <div className='news-container-title'>{texts['news'][lang]}</div>
      <NewsItem img_num='1' date='1.3.2022' title={texts['news-title-1'][lang]} description={texts['news-description-1'][lang]}/>
      <NewsItem img_num='2' date='1.3.2022' title={texts['news-title-2'][lang]} description={texts['news-description-2'][lang]}/>
      <NewsItem img_num='3' date='1.3.2022' title={texts['news-title-3'][lang]} description={texts['news-description-3'][lang]}/>
    </div>
  </div>
);

