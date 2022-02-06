import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Visitor(props){
    return(
        <div className='visitor'>
            <hr align="center" width="100%" size="1" color="#000000"></hr>

            <div className='visitor-info'>
                <div className='visitor-img'></div>

                <div className='visitor-email'>
                    {props.email}
                </div>
            </div>
        </div>
    )
}

export default Visitor;