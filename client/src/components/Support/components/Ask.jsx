import '../style.css';
import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Form, Input, Button } from 'antd';

const lang = DetectLanguage();

function Ask() {
  return (
    <div className="support-container ask-container">
      <h2 className="support-container-title">{texts['ask-title'][lang]}</h2>

      <Form>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={texts['ask-description'][lang]}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Input.TextArea />
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
              right: 0
            }}
          >
            {texts['send'][lang]}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Ask;
