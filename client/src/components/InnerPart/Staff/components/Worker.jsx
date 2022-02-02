import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Worker(props){
    return(
        <div className='worker'>
            <hr align="center" width="100%" size="1" color="#000000"></hr>

            <div className={'worker-img' + ' worker-img-' + props.img_num}></div>

            <div className='worker-text'>
                <div className='worker-name'>
                    {props.name}
                </div>

                <div className='worker-post'>
                    {props.post}
                </div>
            </div>
        </div>
    )
}

export default Worker;