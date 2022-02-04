import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Project(props){
    return(
        <div className='project'>
            <div className={'project-img' + ' project-img-' + props.img_num}></div>

            <div className='projects-text'>
                <div className='projects-title'>
                    {props.name}
                </div>

                <div className='project-description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Project;