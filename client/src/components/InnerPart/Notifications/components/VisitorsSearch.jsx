import Visitor from './Visitor';

import texts from '../texts.json'
import DetectLanguage from '../../../../functions/detectLang';

const lang = DetectLanguage();

function VisitorsSearch(props){
    return(
        <div className='notifications-container notifications-search-container'>
            <select className='sort-select' defaultValue='def'>
                <option disabled value='def'>{texts['status'][lang]}</option>
                <option>{texts['solved'][lang]}</option>
                <option>{texts['not-solved'][lang]}</option>
                <option>{texts['in-processing'][lang]}</option>
            </select>

            <div className='visitors'>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
                <Visitor email='nameofusersmail@gmail.com'/>
            </div>
        </div>
    )
}

export default VisitorsSearch;