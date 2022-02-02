import './style.css';
import Vacancy from './components/Vacancy';
import FindVacancy from './components/FindVacancy';
import RespondVacancy from './components/RespondVacancy';

import DetectLanguage from '../../functions/detectLang';
import texts from './texts.json';

const lang = DetectLanguage();

export const Vacancies = () => (
  <div className="vacancies">
    <div className="vacancies-hero">
      <h1 className="vacancies-title">{texts['title'][lang]}</h1>
      <span className="vacancies-subtitle">{texts['subtitle'][lang]}</span>
    </div>

    <FindVacancy />

    <Vacancy
      title={texts['vacancy-title-1'][lang]}
      description={texts['vacancy-description-1'][lang]}
      img_num="1"
    />

    <Vacancy
      title={texts['vacancy-title-2'][lang]}
      description={texts['vacancy-description-2'][lang]}
      img_num="2"
    />

    <RespondVacancy />
  </div>
);
