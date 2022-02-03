import './style.css';
import Project from './components/Project';
import Partner from './components/Partner';

import texts from './texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export const Projects = () => (
  <div className="projects">
    <div className="projects-container">
        <div className="projects-container-title">{texts['our-projects'][lang]}</div>
        <div className='projects-subcontainer'>
          <Project img_num='1' name={texts['project-name-1'][lang]} description={texts['project-description-1'][lang]}/>
          <Project img_num='2' name={texts['project-name-2'][lang]} description={texts['project-description-2'][lang]}/>
          <Project img_num='3' name={texts['project-name-3'][lang]} description={texts['project-description-3'][lang]}/>
          <Project img_num='4' name={texts['project-name-4'][lang]} description={texts['project-description-4'][lang]}/>
        </div>
    </div>

    <div className="projects-container">
        <div className="projects-container-title">{texts['partners'][lang]}</div>
        <div className='projects-subcontainer'>
          <Partner site='http:\\ссылка на сайт партнера' img_num='1' name={texts['partner-name-1'][lang]} contact_face='Фамилия имя отчество' contact_phone='+7 777 777 77 77'/>
          <Partner site='http:\\ссылка на сайт партнера' img_num='2' name={texts['partner-name-2'][lang]} contact_face='Фамилия имя отчество' contact_phone='+7 777 777 77 77'/>
          <Partner site='http:\\ссылка на сайт партнера' img_num='3' name={texts['partner-name-3'][lang]} contact_face='Фамилия имя отчество' contact_phone='+7 777 777 77 77'/>
          <Partner site='http:\\ссылка на сайт партнера' img_num='4' name={texts['partner-name-4'][lang]} contact_face='Фамилия имя отчество' contact_phone='+7 777 777 77 77'/>
        </div>
    </div>
  </div>
);

