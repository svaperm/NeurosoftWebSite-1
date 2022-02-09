import './style.css';
import StaffSearch from './components/StaffSearch';

import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Card } from 'antd';
import { List } from 'antd/lib/form/Form';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
const lang = DetectLanguage();

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export const Staff = () => (
  <div className="staff">
    <StaffSearch />

    <div className="personal-info">
      <Card title={texts['contact-info'][lang]} bordered={false}>
        <p>{texts['name'][lang] + ': Геннадий'}</p>
        <p>{texts['lastname'][lang] + ': Вахрушев'}</p>
        <p>{texts['contact-email'][lang] + ': gennadiy@gmail.com'}</p>
        <p>{texts['phone'][lang] + ': +7 777 777 77 77'}</p>
      </Card>

      <Avatar size={150} icon={<UserOutlined />} style={{ margin: 'auto' }} />

      <Card
        title={texts['about-me'][lang]}
        bordered={false}
        style={{ width: '85%', marginTop: 100 }}
      >
        <p>
          Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне
        </p>
      </Card>

      <Card
        title={texts['projects'][lang]}
        bordered={false}
        style={{ width: '85%', marginTop: 100 }}
      >
        <div className="my-projects">
          <div className="project-img project-img-1"></div>
          <div className="project-img project-img-2"></div>
          <div className="project-img project-img-3"></div>
        </div>
      </Card>
    </div>
  </div>
);
