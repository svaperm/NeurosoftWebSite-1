import '../style.css';

import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function FindVacancy() {
  return (
    <form className="vacancies-form">
      <div className="vacancies-container">
        <div className="vacancies-container-text">
          <h2 className="services-container-title">
            {texts['find-job'][lang]}
          </h2>
        </div>

        <div className="vacancies-input-area">
          {texts['keywords'][lang]} *
          <input
            required
            className="services-input services-input-secondname"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['profession'][lang]} *
          <input
            required
            className="services-input services-input-name"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['experience'][lang]} *
          <select className="services-input services-input-exp">
            <option disabled selected>
              {texts['choose-exp'][[lang]]}
            </option>
            <option>0</option>
            <option>1-3</option>
            <option>{'>'}3</option>
          </select>
        </div>

        <div className="vacancies-input-button-area">
          <button
            className="vacancies-input vacancies-input-find"
            onClick={(e) => {
              document.querySelector('.vacancies-form').reset();
            }}
          >
            {texts['find'][lang]}
          </button>
        </div>
      </div>
    </form>
  );
}

export default FindVacancy;
