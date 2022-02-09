import './style.css';
import Events from './components/Events';
import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const lang = DetectLanguage();

export const InnerMain = () => (
  <div className="innerMain">
    <Events />
    <Card
      title={texts['best-worker'][lang]}
      bordered={false}
      style={{ marginTop: 80 }}
    >
      <Avatar
        icon={<UserOutlined />}
        size={250}
        style={{ margin: 'auto', display: 'block', marginBottom: 20 }}
      />
      <div className="workers-post">{texts['best-worker-fio'][lang]}</div>
    </Card>

    <Card
      title={texts['projects-in-process'][lang]}
      bordered={false}
      style={{ marginTop: 80 }}
    >
      <div className="projects-cards">
        <Card style={{ marginTop: 20 }}>
          <div className="project-name">{texts['project-name-1'][lang]}</div>
          <div className="project-img project-img-1"></div>
        </Card>
        <Card style={{ marginTop: 20 }}>
          <div className="project-name">{texts['project-name-2'][lang]}</div>
          <div className="project-img project-img-2"></div>
        </Card>
        <Card style={{ marginTop: 20 }}>
          <div className="project-name">{texts['project-name-3'][lang]}</div>
          <div className="project-img project-img-3"></div>
        </Card>
        <Card style={{ marginTop: 20 }}>
          <div className="project-name">{texts['project-name-4'][lang]}</div>
          <div className="project-img project-img-4"></div>
        </Card>
      </div>
    </Card>
  </div>
);
