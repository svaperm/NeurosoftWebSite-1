import '../style.css';

import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function Ask() {
  return (
    <div className="support-container ask-container">
      <h2 className="support-container-title">{texts['ask-title'][lang]}</h2>
      <span className="support-container-description">
        {texts['ask-description'][lang]}
      </span>

      <textarea className="support-q" rows="5"></textarea>
      <span className="support-container-description">Email</span>
      <input className="support-email" type="text"></input>
      <button
        className="support-send"
        onClick={(e) => {
          const textBlock = document.querySelector('.support-q');
          const emailBlock = document.querySelector('.support-email');
          [textBlock, emailBlock].forEach((block) => {
            block.value = '';
          });
        }}
      >
        {texts['send'][lang]}
      </button>
    </div>
  );
}

export default Ask;
