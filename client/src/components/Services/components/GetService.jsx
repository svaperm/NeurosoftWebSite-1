import '../style.css';

import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function GetService() {
  return (
    <form>
    <div className="services-container get-service">
      <div className="services-container-text">
        <h2 className="services-container-title get-service-title">
          {texts['get-service'][lang]}
        </h2>
      </div>

      <div className="services-input-area">
        {texts['lastname'][lang]}*
        <input required
          className="services-input services-input-secondname"
          type="text"
        ></input>
      </div>

      <div className="services-input-area">
        {texts['name'][lang]}*
        <input required
          className="services-input services-input-name"
          type="text"
        ></input>
      </div>

      <div className="services-input-area">
        {texts['email'][lang]}*
        <input required
          className="services-input services-input-email"
          type="text"
        ></input>
      </div>

      <div className="services-input-area">
        {texts['phone'][lang]}
        <input
          className="services-input services-input-phone"
          type="text"
        ></input>
      </div>

      <div className="services-input-area">
        {texts['city'][lang]}
        <input
          className="services-input services-input-city"
          type="text"
        ></input>
      </div>

      <div className="services-input-area">
        {texts['service'][lang]}
        <select className="services-input services-input-service">
          <option>{texts['choose-service'][lang]}</option>
          <option>{texts['service'][lang]} 1</option>
          <option>{texts['service'][lang]} 2</option>
          <option>{texts['service'][lang]} 3</option>
          <option>{texts['service'][lang]} 4</option>
        </select>
      </div>

      <div className="services-input-area">
        <input type='submit' className="services-input services-input-send" value={texts['send'][lang]}>
          
        </input>
      </div>
    </div>
    </form>
  );
}

export default GetService;
