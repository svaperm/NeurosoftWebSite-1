import './style.css';

import Question from './components/Question';
import Ask from './components/Ask';

import texts from './texts.json'
import DetectLanguage from '../../functions/detectLang';

const lang = DetectLanguage();

function Support(){
    return(
        <div className="support">
            <div className="support-hero">
                <h1 className="support-title">{texts['title'][lang]}</h1>
            </div>

            <Question title={texts['q-title-1'][lang]} description={texts['q-text-1'][lang]}/>

            <Question title={texts['q-title-2'][lang]} description={texts['q-text-2'][lang]}/>

            <Ask/>
        </div>
    )
} 

export default Support;
