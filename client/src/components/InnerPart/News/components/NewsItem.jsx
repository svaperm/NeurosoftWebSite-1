import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Project(props){
    return(
        <div className='news-item'>
            <div className={'news-img' + ' news-img-' + props.img_num}></div>

            <div className='news-text'>
                <div className='news-title'>
                    {props.date + ' '}
                    {props.title}
                </div>

                <div className='news-description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Project;