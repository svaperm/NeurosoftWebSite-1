import '../style.css'

import texts from '../texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function Vacancy(props){
    return(
        <div className='vacancies-container'>
            <div className='vacancies-container-text'>
                <h2 className='vacancies-container-title'>{props.title}</h2>
                <span className='vacancies-container-description'>
                    {props.description}
                </span>
            </div>
            <div className={'vacancies-page-img vacancy-img-' + props.img_num}></div>
            <button className='vacancies-input vacancies-respond-btn'>{texts['respond'][lang]}</button>
        </div>
    )
}

export default Vacancy;