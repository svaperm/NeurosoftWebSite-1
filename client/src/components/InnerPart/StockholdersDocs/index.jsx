import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const StockholdersDocs = () => (
  <div className="documentation">
    <div className="documentation-container">
        <div className="documentation-container-title">{texts['constituent-documents'][lang]}</div>

        
        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

      </div>

      <div className="documentation-container">
        <div className="documentation-container-title">{texts['accounting-statements'][lang]}</div>

        
        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

      </div>

      <div className="documentation-container">
        <div className="documentation-container-title">{texts['financial-plan'][lang]}</div>
        
        <li className='document'>
          <a className='filename' href=''>Filename</a>
        </li>

      </div>
  </div>
);

export default StockholdersDocs;
