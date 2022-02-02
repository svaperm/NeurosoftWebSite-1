import './style.css';
import Events from './components/Events';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const InnerMain = () => (
  <div className="innerMain">
    <Events />

    <div className='innerMain-container best-worker-container'>
      <div className='innerMain-container-title'>
        {texts['best-worker'][lang]}
      </div>

      <div className='best-worker'>
        <div className='best-worker-img'></div>
        <div className='workers-post'>{texts['best-worker-post'][lang]}</div>
      </div>
    </div>

    <div className="innerMain-container">
      <h2 className="innerMain-container-title">{texts['projects-in-process'][lang]}</h2>
      <div className="innerMain-projects">
        <div className="innerMain-projects-item">
          <div className="project-img project-img-1"></div>
          <div className='project-name'>{texts['project-name-1'][lang]}</div>
        </div>
        <div className="innerMain-projects-item">
          <div className="project-img project-img-2"></div>
          <div className='project-name'>{texts['project-name-2'][lang]}</div>
        </div>
        <div className="innerMain-projects-item">
          <div className="project-img project-img-3"></div>
          <div className='project-name'>{texts['project-name-3'][lang]}</div>
        </div>
        <div className="innerMain-projects-item">
          <div className="project-img project-img-4"></div>
          <div className='project-name'>{texts['project-name-4'][lang]}</div>
        </div>
      </div>
    </div>
  </div>
);

