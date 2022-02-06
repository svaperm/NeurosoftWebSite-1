import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function NotifResponse(props){
    return(
        <div className='notif-page'>
            <div className='info vacancy-info'>
                {texts['vacancy'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info lastname-info'>
                {texts['lastname'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info name-info'>
                {texts['name'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info city-info'>
                {texts['city'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info phone-info'>
                {texts['phone'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info email-info'>
                {texts['email'][lang]}
                <input className='info-field' type='text'disabled/>
            </div>

            <div className='info resume-info'>
                {texts['resume'][lang]}
                <input className='info-field' type='text' disabled/>
            </div>

            <div className='info letter-info'>
                {texts['letter'][lang]}
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

export default NotifResponse;