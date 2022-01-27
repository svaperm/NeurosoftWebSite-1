import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../functions/detectLang';

const lang = DetectLanguage();

const Landing = () => (
  <div className="landing">
    <div className="landing-hero">
      <h1 className="landing-title">{texts['title'][lang]}</h1>
      <span className="landing-subtitle">
        {texts['subtitle'][lang]}
      </span>
      <div className="hero-world"></div>
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">{texts['services'][lang]}</h2>
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
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">{texts['why-us'][lang]}</h2>
      <span className="landing-subtitle">
        {texts['why-us-text'][lang]}
      </span>
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">{texts['advantages'][lang]}</h2>
      <span className="landing-subtitle">
        {texts['advantages-text'][lang]}
      </span>
    </div>
  </div>
);

export default Landing;
