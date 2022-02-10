import texts from '../texts.json';
import DetectLanguage from '../../../../functions/detectLang';
import { Form, Input, Select } from 'antd';
const { Option } = Select;

const lang = DetectLanguage();

function ServiceRequest(props) {
  return (
    <div className="notif-page">
      <Form>
        <Form.Item label={texts['service'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['lastname'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['name'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['city'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['phone'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['email'][lang]}>
          <Input />
        </Form.Item>
        <Form.Item label={texts['notes'][lang]}>
          <Input.TextArea />
        </Form.Item>
      </Form>

      <Select defaultValue={texts['status'][lang]} style={{ width: 300, marginLeft: 30 }}>
        <Option value={texts['solved'][lang]}>{texts['solved'][lang]}</Option>
        <Option value={texts['not-solved'][lang]}>
          {texts['not-solved'][lang]}
        </Option>
        <Option value={texts['in-processing'][lang]}>
          {texts['in-processing'][lang]}
        </Option>
      </Select>
    </div>
  );
}

export default ServiceRequest;
