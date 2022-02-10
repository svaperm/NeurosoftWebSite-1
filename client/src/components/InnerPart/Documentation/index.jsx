import './style.css';

import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { Card } from 'antd';
import pdf from './../../../pdf-test.pdf';

const lang = DetectLanguage();

export const Documentation = () => (
  <div className="documentation">
    <Card title={texts['shared-documents'][lang]} style={{ marginBottom: 80 }}>
      <ul>
        {[...new Array(5)].map((val) => (
          <li className="document">
            <a
              target="_blank"
              rel="noopener noreferrer"
              download
              className="filename"
              href={pdf}
            >
              Filename
            </a>
          </li>
        ))}
      </ul>
    </Card>

    <Card title={texts['technologies'][lang]} style={{ marginBottom: 80 }}>
      <ul>
        {[
          [...new Array(5)].map((val) => (
            <li className="document">
              <a
                target="_blank"
                rel="noopener noreferrer"
                download
                className="filename"
                href={pdf}
              >
                Filename
              </a>
            </li>
          )),
        ]}
      </ul>
    </Card>

    <Card title={texts['eLibrary'][lang]} style={{ marginBottom: 80 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {[...new Array(5)].map((val) => (
          <li className="book">
            <a
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bookname"
              href={pdf}
            >
              bookname
            </a>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);
