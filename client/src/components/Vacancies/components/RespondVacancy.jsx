import '../style.css';

import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function RespondVacancy() {
  return (
    <form className="vacancies-form-respond">
      <div className="vacancies-container vacancies-form-container">
        <div className="vacancies-container-text">
          <h2 className="services-container-title vacancies-form-title">
            {texts['respond'][lang]}
          </h2>
        </div>

        <div className="vacancies-input-area">
          {texts['lastname'][lang]} *
          <input
            required
            className="services-input services-input-secondname"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['name'][lang]} *
          <input
            required
            className="services-input services-input-name"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          Email *
          <input
            required
            className="services-input services-input-email"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['phone'][lang]}
          <input
            className="services-input services-input-phone"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['city'][lang]}
          <input
            className="services-input services-input-city"
            type="text"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['vacancy'][lang]} *
          <select required className="services-input services-input-vacancy">
            <option hidden selected>
              {texts['choose-vac'][[lang]]}
            </option>
            <option>{texts['vacancy'][lang]} 1</option>
            <option>{texts['vacancy'][lang]} 2</option>
            <option>{texts['vacancy'][lang]} 3</option>
          </select>
        </div>

        <div className="vacancies-input-area">
          {texts['resume'][lang]} *
          <input
            required
            className="services-input services-input-resume"
            type="file"
          ></input>
        </div>

        <div className="vacancies-input-area">
          {texts['letter'][lang]}
          <textarea className="vacancies-letter" rows="5"></textarea>
        </div>

        <button
          className="vacancies-input vacancies-respond-btn"
          onClick={(e) => {
            document.querySelector('.vacancies-form-respond').reset();
          }}
        >
          {texts['respond'][lang]}
        </button>
      </div>
    </form>
  );
}

export default RespondVacancy;
