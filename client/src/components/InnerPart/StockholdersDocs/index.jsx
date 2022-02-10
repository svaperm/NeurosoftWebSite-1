import './style.css';
import { Card } from 'antd';
import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const StockholdersDocs = () => (
  <div className="documentation">
    <Card
      title={texts['constituent-documents'][lang]}
      style={{ marginBottom: 80 }}
    >
      <ul>
        {[...new Array(5)].map(() => (
          <li className="document">
            <a className="filename" href="">
              Filename
            </a>
          </li>
        ))}
      </ul>
    </Card>
    <Card
      title={texts['accounting-statements'][lang]}
      style={{ marginBottom: 80 }}
    >
      <ul>
        {[...new Array(5)].map(() => (
          <li className="document">
            <a className="filename" href="">
              Filename
            </a>
          </li>
        ))}
      </ul>
    </Card>

    <Card title={texts['financial-plan'][lang]} style={{ marginBottom: 80 }}>
      <ul>
        {[...new Array(5)].map(() => (
          <li className="document">
            <a className="filename" href="">
              Filename
            </a>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

export default StockholdersDocs;
