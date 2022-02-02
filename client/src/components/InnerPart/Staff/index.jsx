import './style.css';
import StaffSearch from './components/StaffSearch';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const Staff = () => (
  <div className="staff">
    <StaffSearch/>

    <div className='personal-info'>
      <div className='staff-container contact-info-container'>
        <div className='staff-container-title'>{texts['contact-info'][lang]}</div>

        <div className='personal-info-text'>
          <span>{texts['name'][lang] + ': Геннадий'}</span>
          <span>{texts['lastname'][lang] + ': Вахрушев'}</span>
          <span>{texts['contact-email'][lang] + ': gennadiy@gmail.com'}</span>
          <span>{texts['phone'][lang] + ': +7 777 777 77 77'}</span>
        </div>
      </div>

      <div className='personal-photo'></div>

      <div className='staff-container about-me-container'>
        <div className='staff-container-title'>{texts['about-me'][lang]}</div>

        <div className='about-me-text'>
          Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне Текст обо мне 
        </div>
      </div>

      <div className='staff-container my-projects-container'>
        <div className='staff-container-title'>{texts['projects'][lang]}</div>

        <div className='my-projects'>
          <div className="project-img project-img-1"></div>
          <div className="project-img project-img-2"></div>
          <div className="project-img project-img-3"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Staff;
