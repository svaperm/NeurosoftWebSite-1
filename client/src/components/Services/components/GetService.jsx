import '../style.css'

import texts from '../texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

function GetService(){
    return (
        <div className='services-container'>
            <div className='services-container-text'>
                <h2 className='services-container-title'>{texts['get-service'][lang]}</h2>
            </div>

            <div className='services-input-area'>
                {texts['lastname'][lang]} 
                <input className='services-input services-input-secondname' type='text'></input> 
            </div>

            <div className='services-input-area'>
                {texts['name'][lang]} 
                <input className='services-input services-input-name' type='text'></input> 
            </div>

            <div className='services-input-area'>
                {texts['email'][lang]} 
                <input className='services-input services-input-email' type='text'></input> 
            </div>

            <div className='services-input-area'>
                {texts['phone'][lang]}  
                <input className='services-input services-input-phone' type='text'></input> 
            </div>

            <div className='services-input-area'>
                {texts['city'][lang]}  
                <input className='services-input services-input-city' type='text'></input> 
            </div>

            <div className='services-input-area'>
                {texts['service'][lang]} 
                <select className='services-input services-input-service'>
                    <option>Выберете услугу</option>
                    <option>Услуга 1</option>
                    <option>Услуга 2</option>
                    <option>Услуга 3</option>
                    <option>Услуга 4</option>
                </select> 
            </div>

            <div className='services-input-area'>
                <input className='services-input services-input-send' type='button' value={texts['send'][lang]}></input> 
            </div>
        </div>
    )
}

export default GetService;