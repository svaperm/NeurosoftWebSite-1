import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Partner(props){
    return(
        <div className='partner'>
            <div className={'partner-img' + ' partner-img-' + props.img_num}></div>

            <div className='projects-text'>
                <a href={props.site}>{props.site}</a>
                <div className='projects-title'>
                    {props.name}
                </div>

                <div className='partner-contact-face'>
                    {props.contact_face}
                </div>

                <div className='partner-contact-phone'>
                    {props.contact_phone}
                </div>
            </div>
        </div>
    )
}

export default Partner;