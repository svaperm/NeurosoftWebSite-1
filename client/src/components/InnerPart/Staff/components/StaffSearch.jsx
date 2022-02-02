import Worker from './Worker'

import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function StaffSearch(props){
    return(
        <div className='staff-container staff-search-container'>
            <div className='search-input'>
                <input className='search-text' type='text' placeholder={texts['find-staff'][lang]}></input>
                <button className='search-btn'></button>
            </div>

            <div className='workers'>
                <Worker img_num='1' name={texts['worker-name-1'][lang]} post={texts['worker-post-1'][lang]}/>
                <Worker img_num='2' name={texts['worker-name-2'][lang]} post={texts['worker-post-2'][lang]}/>
                <Worker img_num='2' name={texts['worker-name-2'][lang]} post={texts['worker-post-2'][lang]}/>
                <Worker img_num='2' name={texts['worker-name-2'][lang]} post={texts['worker-post-2'][lang]}/>
                <Worker img_num='2' name={texts['worker-name-2'][lang]} post={texts['worker-post-2'][lang]}/>
                <Worker img_num='2' name={texts['worker-name-2'][lang]} post={texts['worker-post-2'][lang]}/>
                <Worker img_num='3' name={texts['worker-name-3'][lang]} post={texts['worker-post-3'][lang]}/>
            </div>
        </div>
    )
}

export default StaffSearch;