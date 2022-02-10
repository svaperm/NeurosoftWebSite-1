import './style.css';
import NewsItem from './components/NewsItem';
import { Card } from 'antd';
import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const News = () => (
  <div className="news">
    <Card title={texts['news'][lang]} style={{ marginBottom: 80 }}>
      <NewsItem
        img_num="1"
        date="1.3.2022"
        title={texts['news-title-1'][lang]}
        description={texts['news-description-1'][lang]}
      />
      <NewsItem
        img_num="2"
        date="1.3.2022"
        title={texts['news-title-2'][lang]}
        description={texts['news-description-2'][lang]}
      />
      <NewsItem
        img_num="3"
        date="1.3.2022"
        title={texts['news-title-3'][lang]}
        description={texts['news-description-3'][lang]}
      />
    </Card>
  </div>
);
