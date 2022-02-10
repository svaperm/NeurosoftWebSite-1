import texts from '../texts.json';
import DetectLanguage from '../../../../functions/detectLang';
import { Avatar, Card, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const lang = DetectLanguage();

const data = [
  {
    title:
      'С 10.02.2022 запущен корпоративный сайт компании. Все вопросы и замечания можно оставить в разделе “Вопросы”',
  },
];

function Events(props) {
  return (
    <Card title={texts['events'][lang]}>
      <List
        style={{ padding: '30px 50px' }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} size={64} />}
              title={item.title}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default Events;
