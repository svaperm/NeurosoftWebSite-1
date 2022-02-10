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
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p>{texts['q-text-1'][lang]}</p>
      <a href="https://cloud.mail.ru/public/Ayg5/pgrGFPe5h">
        https://cloud.mail.ru/public/Ayg5/pgrGFPe5h
      </a>
      <a href="https://cloud.mail.ru/public/DySa/4rHPnNcGZ">
        https://cloud.mail.ru/public/DySa/4rHPnNcGZ
      </a>
      <a href="https://cloud.mail.ru/public/ATSa/LPXdGZM3c">
        https://cloud.mail.ru/public/ATSa/LPXdGZM3c
      </a>
      <a href="https://cloud.mail.ru/public/5jDt/LLPHJ3auu">
        https://cloud.mail.ru/public/5jDt/LLPHJ3auu
      </a>
      <a href="https://cloud.mail.ru/public/azBd/SZTYqr8bq">
        https://cloud.mail.ru/public/azBd/SZTYqr8bq
      </a>
      <a href="https://cloud.mail.ru/public/36r9/hpgnZVSHr">
        https://cloud.mail.ru/public/36r9/hpgnZVSHr
      </a>
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
