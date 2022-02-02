import { Solution } from './components/Solution';
import './style.css';

import texts from './texts.json'
import DetectLanguage from '../../functions/detectLang';

const lang = DetectLanguage();

export const Solutions = () => (
  <div className="solutions">
    <Solution title={texts['solution-title-1'][lang]} subtitle={texts['solution-subtitle-1'][lang]}/>
    <Solution title={texts['solution-title-2'][lang]} subtitle={texts['solution-subtitle-2'][lang]}/>
    <Solution title={texts['solution-title-3'][lang]} subtitle={texts['solution-subtitle-3'][lang]}/>
    <Solution title={texts['solution-title-4'][lang]} subtitle={texts['solution-subtitle-4'][lang]}/>
    <Solution title={texts['solution-title-5'][lang]} subtitle={texts['solution-subtitle-5'][lang]}/>
  </div>
);

