import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function NotifQuestion(props){
    return(
        <div className='notif-page'>
            <div className='info email-info-q'>
                {texts['email'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info q-info'>
                {texts['question'][lang]}
                <textarea className='info-textarea info-field' type='text'disabled/>
            </div>

            <div className='info notes-info'>
                {texts['notes'][lang]}
                <textarea className='info-textarea info-field' type='text'disabled/>
            </div>

            <div className='info status-info'>
                {texts['status'][lang]}

                <select className='info-field' defaultValue='def'>
                    <option disabled value='def'>{texts['status'][lang]}</option>
                    <option>{texts['solved'][lang]}</option>
                    <option>{texts['not-solved'][lang]}</option>
                    <option>{texts['in-processing'][lang]}</option>
                </select>
            </div>
        </div>
    )
}

export default NotifQuestion;