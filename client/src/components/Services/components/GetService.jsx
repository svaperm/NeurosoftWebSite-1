import '../style.css';
import { Input, Form, Button, Select } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const { Option } = Select;

const lang = DetectLanguage();

function GetService() {
  return (
    <div className="services-container get-service">
      <div className="services-container-text">
        <h2 className="services-container-title get-service-title">
          {texts['get-service'][lang]}
        </h2>
      </div>
      <Form size="large" className="inputs-container">
        <Form.Item
          size="large"
          label={texts['lastname'][lang]}
          name={texts['lastname'][lang]}
          rules={[{ required: true, message: 'Please input your lastname!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['name'][lang]}
          name={texts['name'][lang]}
          rules={[{ required: true, message: 'Please input your name!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['email'][lang]}
          name={texts['email'][lang]}
          rules={[{ required: true, message: 'Please input your email!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['phone'][lang]}
          name={texts['phone'][lang]}
          rules={[{ required: true, message: 'Please input your phone!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['city'][lang]}
          name={texts['city'][lang]}
          rules={[{ required: true, message: 'Please input your city!' }]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item
          label={texts['service'][lang]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50,
          }}
        >
          <Select defaultValue={texts['choose-service'][lang]}>
            <Option value={`${texts['service'][lang]} 1`}>
              {texts['service'][lang]} 1
            </Option>
            <Option value={`${texts['service'][lang]} 2`}>
              {texts['service'][lang]} 2
            </Option>
            <Option value={`${texts['service'][lang]} 3`}>
              {texts['service'][lang]} 3
            </Option>
            <Option value={`${texts['service'][lang]} 4`}>
              {texts['service'][lang]} 4
            </Option>
          </Select>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ width: 200, height: 60, right: 0, position: 'absolute'}}
        >
          {texts['send'][lang]}
        </Button>
      </Form>

      {/* <div className="services-input-area"> */}
      {/* <button
          className="services-input services-input-send"
          onClick={(e) => {
            const inputs = document.querySelectorAll('.services-input');
            inputs.forEach((input) => {
              input.value = '';
            });
          }}
        >
          {texts['send'][lang]}
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default GetService;
