import './style.css';
import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import { Card } from 'antd';

const lang = DetectLanguage();

export const Landing = () => (
  <div className="landing">
    <div className="landing-hero">
      <h1 className="landing-title">{texts['title'][lang]}</h1>
      <span className="landing-subtitle hero-subtitle">{texts['subtitle'][lang]}</span>
      <div className="hero-world"></div>
    </div>
    <Card
      title={texts['services'][lang]}
      style={{ width: '90%', margin: 'auto', marginBottom: '120px' }}
    >
      <div className="landing-services">
        <div className="landing-services-item">
          <div className="service-img service-img-1"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-2"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-3"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-4"></div>
        </div>
      </div>
    </Card>

    <Card
      title={texts['why-us'][lang]}
      style={{ width: '90%', margin: 'auto', marginBottom: '120px' }}
    >
      <span className="landing-subtitle">{texts['why-us-text'][lang]}</span>
    </Card>

    <Card
      title={texts['advantages'][lang]}
      style={{ width: '90%', margin: 'auto', marginBottom: '120px' }}
    >
      <span className="landing-subtitle">{texts['advantages-text'][lang]}</span>
    </Card>
  </div>
);
