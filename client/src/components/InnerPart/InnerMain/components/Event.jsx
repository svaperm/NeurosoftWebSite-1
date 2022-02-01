import { NavLink } from 'react-router-dom';

import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Event(props){
    return(
        <div className='event'>
            <div className='event-date'>
                {props.date}
            </div>

            <div className='event-description'>
                {props.description}
            </div>
        </div>
    )
}

export default Event;
