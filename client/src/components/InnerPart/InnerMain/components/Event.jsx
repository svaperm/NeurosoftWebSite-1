import { NavLink } from 'react-router-dom';

import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Event(props){
    return(
        <div className='event'>
            <hr align="center" width="100%" size="1" color="#f2a007"></hr>
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
