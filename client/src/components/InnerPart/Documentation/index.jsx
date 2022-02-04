import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const Documentation = () => (
  <div className="documentation">
    <div className="documentation-container">
        <div className="documentation-container-title">{texts['shared-documents'][lang]}</div>

        
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
        <div className="documentation-container-title">{texts['technologies'][lang]}</div>

        
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
        <div className="documentation-container-title">{texts['eLibrary'][lang]}</div>

        
        <div className='book' href=''>
          <a className='bookname' href=''>bookname</a>
        </div>

        <li className='book'>
          <a className='bookname' href=''>bookname</a>
        </li>

        <li className='book'>
          <a className='bookname' href=''>bookname</a>
        </li>

        <li className='book'>
          <a className='bookname' href=''>bookname</a>
        </li>

        <li className='book'>
          <a className='bookname' href=''>bookname</a>
        </li>

      </div>
  </div>
);

