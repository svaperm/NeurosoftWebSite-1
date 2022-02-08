import '../style.css';
import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Button, Card } from 'antd';

const lang = DetectLanguage();

function Vacancy(props) {
  return (
    <Card
      title={props.title}
      style={{
        width: '100%',
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
        fontSize: '20px',
        marginBottom: 50,
        position: 'relative',
      }}
    >
      <p style={{ padding: "100px 100px" }}> {props.description}</p>
      <Button
        type="primary"
        style={{ position: 'absolute', right: 200, bottom: 30, width: 200, height: 50 , fontSize: 16}}
      >
        {texts['respond'][lang]}
      </Button>
    </Card>
  );
}

export default Vacancy;
