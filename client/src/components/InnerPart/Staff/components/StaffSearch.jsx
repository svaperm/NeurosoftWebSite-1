import Worker from './Worker';
import texts from '../texts.json';
import DetectLanguage from '../../../../functions/detectLang';
import { Card, Avatar, List, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const lang = DetectLanguage();

function StaffSearch(props) {
  return (
    <div className="staff-container staff-search-container">
      <Search placeholder={texts['find-staff'][lang]} style={{ width: "100%", height: 50 }} />

      <Card>
        <List
        style={{height: 500, overflowY: "scroll"}}
          itemLayout="horizontal"
          dataSource={['1', '2', '2', '2', '2', '3']}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} size={40} />}
                title={
                  <a href="https://ant.design">
                    {texts[`worker-name-${item}`][lang]}
                  </a>
                }
                description={texts[`worker-post-${item}`][lang]}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default StaffSearch;
