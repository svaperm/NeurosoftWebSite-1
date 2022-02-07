import './style.css';
import { UserOutlined } from '@ant-design/icons';
import DetectLanguage from '../../functions/detectLang';
import texts from './texts.json';
import Avatar from 'antd/lib/avatar/avatar';

const lang = DetectLanguage();

export const About = () => (
  <div className="about">
    <div className="about-hero">
      <h1 className="mission">{texts['mission'][lang]}</h1>
      <span className="about-subtitle">{texts['subtitle'][lang]}</span>
    </div>

    <div className="about-container">
      <h2 className="about-container-title">{texts['team'][lang]}</h2>
      <div className="about-workers">
        <div className="about-workers-item">
          <Avatar size={150} icon={<UserOutlined />} />
          <div className="workers-post">{texts['post1'][lang]}</div>
        </div>

        <div className="about-workers-item">
          <Avatar size={150} icon={<UserOutlined />} />
          <div className="workers-post">{texts['post2'][lang]}</div>
        </div>

        <div className="about-workers-item">
          <Avatar size={150} icon={<UserOutlined />} />
          <div className="workers-post">{texts['post3'][lang]}</div>
        </div>
      </div>
    </div>

    <div className="about-container">
      <h2 className="about-container-title">{texts['trust-us'][lang]}</h2>
      <div className="about-companies">
        <div className="about-companies-item">
          <div className="companies-img companies-img-1"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-2"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-3"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-4"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-5"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-6"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-7"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-8"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-9"></div>
        </div>

        <div className="about-companies-item">
          <div className="companies-img companies-img-10"></div>
        </div>
      </div>
    </div>
  </div>
);

