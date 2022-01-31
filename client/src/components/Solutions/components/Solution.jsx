import '../style.css';

import texts from '../texts.json';
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

export function Solution(props){
  return(
<div className="solution-container">
    <h2 className="solution-title">{props.title}</h2>
    <h2 className="solution-line"></h2>
    <span className="solution-description">
      {props.subtitle}
    </span>
    <button className="solution-btn">{texts['view'][lang]}</button>
  </div>
  )
}
