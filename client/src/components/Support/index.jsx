import './style.css';

import Question from './components/Question';
import Ask from './components/Ask';

import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import { Card } from 'antd';

const lang = DetectLanguage();

export const Support = () => (
  <div className="support">
    <div className="support-hero">
      <h1 className="support-title">{texts['title'][lang]}</h1>
    </div>
    <Card
      title={texts['q-title-1'][lang]}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['q-text-1'][lang]}</p>
    </Card>
    <Card
      title={texts['q-title-2'][lang]}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['q-text-2'][lang]}</p>
    </Card>

    <Ask />
  </div>
);
