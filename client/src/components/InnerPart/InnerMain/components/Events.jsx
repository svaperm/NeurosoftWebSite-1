import Event from './Event'

import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function Events(props){
    return(
        <div className='innerMain-container'>
          <div className='innerMain-container-title'>
            {texts['events'][lang]}
          </div>

          <div className='events-container'>
            <div className='events-conainer-title'>
              {texts['current-week'][lang]}
            </div>

            <Event date='1.3.2022' description={texts['event-description-1'][lang]}/>
            <Event date='1.3.2022' description={texts['event-description-2'][lang]}/>
            <Event date='1.3.2022' description={texts['event-description-3'][lang]}/>
          </div>

          <div className='line'></div>

          <div className='events-container'>
            <div className='events-conainer-title'>
              {texts['soon'][lang]}
            </div>

            <Event date='1.3.2022' description={texts['event-description-4'][lang]}/>
            <Event date='1.3.2022' description={texts['event-description-5'][lang]}/>
            <Event date='1.3.2022' description={texts['event-description-6'][lang]}/>
          </div>
        </div>
    )
}

export default Events;

