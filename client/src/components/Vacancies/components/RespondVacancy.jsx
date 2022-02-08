import '../style.css';
import { UploadOutlined } from '@ant-design/icons';
import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Button, Form, Input, Select } from 'antd';

const Option = { Select };

const lang = DetectLanguage();

function RespondVacancy() {
  return (
    <div className="vacancies-container vacancies-form-container">
      <h2 className="services-container-title vacancies-form-title">
        {texts['respond'][lang]}
      </h2>
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
          label={texts['vacancy'][lang]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50,
          }}
        >
          <Select defaultValue={texts['choose-vac'][[lang]]}>
            <Option value={`${texts['vacancy'][lang]} 1`}>
              {texts['vacancy'][lang]} 1
            </Option>
            <Option value={`${texts['vacancy'][lang]} 2`}>
              {texts['vacancy'][lang]} 2
            </Option>
            <Option value={`${texts['vacancy'][lang]} 3`}>
              {texts['vacancy'][lang]} 3
            </Option>
            <Option value={`${texts['vacancy'][lang]} 4`}>
              {texts['vacancy'][lang]} 4
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={texts['resume'][lang]}
          style={{
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50,
          }}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Form.Item>
        <Form.Item
          label={texts['letter'][lang]}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Input.TextArea />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: 200, height: 60, right: 0, position: 'absolute' }}
        >
          {texts['respond'][lang]}
        </Button>
      </Form>
    </div>
  );
}

export default RespondVacancy;
