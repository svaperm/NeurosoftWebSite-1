import '../style.css'

import texts from '../texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function Ask(props){
    return(
        <div className='support-container ask-container'>
            <h2 className='support-container-title'>{texts['ask-title'][lang]}</h2>
            <span className='support-container-description'>
                {texts['ask-description'][lang]}
            </span>

            <textarea className='support-q' rows='5'></textarea>
            <span className='support-container-description'>
                Email
            </span>
            <input className='support-email' type='text'></input>
            <input className='support-send' type='button' value={texts['send'][lang]}></input>
        </div>
    )
}

export default Ask;