import '../style.css';
import { Form, Input, Button, Select } from 'antd';
import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const { Option } = Select;

const lang = DetectLanguage();

function FindVacancy() {
  return (
    <div className="vacancies-container">
      <h2 className="services-container-title">{texts['find-job'][lang]}</h2>

      <Form>
        <Form.Item
          size="large"
          label={texts['keywords'][lang]}
          rules={[{ required: true, message: 'Please input keywords!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['profession'][lang]}
          style={{ display: 'flex', flexDirection: 'column' }}
          rules={[{ required: true, message: 'Please input profession!' }]}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['experience'][lang]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50,
          }}
        >
          <Select
            defaultValue={texts['choose-exp'][[lang]]}
            style={{ fontSize: '20px' }}
          >
            <Option value="0" style={{ fontSize: '20px' }}>
              0
            </Option>
            <Option value="1-3" style={{ fontSize: '20px' }}>
              1-3
            </Option>
            <Option value="> 3" style={{ fontSize: '20px' }}>{`> 3`}</Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ position: 'relative' }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: 200,
              height: 50,
              fontSize: '16px',
              position: 'absolute',
              right: 0,
            }}
          >
            {texts['find'][lang]}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FindVacancy;
