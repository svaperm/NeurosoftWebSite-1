import './style.css';
import Service from './components/Service';
import GetService from './components/GetService';

import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import { Card } from 'antd';

const lang = DetectLanguage();

export const Services = () => (
  <div className="services">
    <div className="services-hero">
      <h1 className="services-title">{texts['title'][lang]}</h1>
      <span className="services-subtitle">{texts['subtitle'][lang]}</span>
    </div>
    <Card
      title={texts['service-title-1'][lang]}
      extra={<a href="#">More</a>}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['service-description-1'][lang]}</p>
    </Card>
    <Card
      title={texts['service-title-2'][lang]}
      extra={<a href="#">More</a>}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['service-description-2'][lang]}</p>
    </Card>
    <Card
      title={texts['service-title-3'][lang]}
      extra={<a href="#">More</a>}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['service-description-3'][lang]}</p>
    </Card>
    <Card
      title={texts['service-title-4'][lang]}
      extra={<a href="#">More</a>}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
      }}
    >
      <p>{texts['service-description-4'][lang]}</p>
    </Card>
    {/* 
    <Service
      title={texts['service-title-1'][lang]}
      description={texts['service-description-1'][lang]}
      img_num="1"
    />

    <Service
      title={texts['service-title-2'][lang]}
      description={texts['service-description-2'][lang]}
      img_num="2"
    />

    <Service
      title={texts['service-title-3'][lang]}
      description={texts['service-description-3'][lang]}
      img_num="3"
    />

    <Service
      title={texts['service-title-4'][lang]}
      description={texts['service-description-4'][lang]}
      img_num="4"
    /> */}

    <GetService />
  </div>
);
