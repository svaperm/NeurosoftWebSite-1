import { Avatar, Card, List } from 'antd';
import texts from '../texts.json';
import DetectLanguage from '../../../../functions/detectLang';
import { UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';
const { Option } = Select;

const lang = DetectLanguage();

function VisitorsSearch(props) {
  return (
    <div className="notifications-container notifications-search-container">
      <Select defaultValue={texts['status'][lang]} style={{width: "100%"}}>
        <Option value={texts['solved'][lang]}>{texts['solved'][lang]}</Option>
        <Option value={texts['not-solved'][lang]}>
          {texts['not-solved'][lang]}
        </Option>
        <Option value={texts['in-processing'][lang]}>
          {texts['in-processing'][lang]}
        </Option>
      </Select>

      <Card>
        <List
          style={{ height: 500, overflowY: 'scroll' }}
          itemLayout="horizontal"
          dataSource={['1', '2', '2', '2', '2', '3']}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} size={40} />}
                title="nameofuser@gmail.com"
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default VisitorsSearch;
