import texts from '../texts.json';
import DetectLanguage from '../../../../functions/detectLang';
import { Avatar, Card, List } from 'antd';
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
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default Events;
