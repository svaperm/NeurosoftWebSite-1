import '../style.css'

function GetService(){
    return (
        <div className='services-container'>
            <div className='services-container-text'>
                <h2 className='services-container-title'>Получить услугу</h2>
            </div>

            <div className='services-input-area'>
                Фамилия 
                <input className='services-input services-input-secondname' type='text'></input> 
            </div>

            <div className='services-input-area'>
                Имя
                <input className='services-input services-input-name' type='text'></input> 
            </div>

            <div className='services-input-area'>
                Email
                <input className='services-input services-input-email' type='text'></input> 
            </div>

            <div className='services-input-area'>
                Телефон 
                <input className='services-input services-input-phone' type='text'></input> 
            </div>

            <div className='services-input-area'>
                Город 
                <input className='services-input services-input-city' type='text'></input> 
            </div>

            <div className='services-input-area'>
                Услуга 
                <select className='services-input services-input-service'>
                    <option>Выберете услугу</option>
                    <option>Услуга 1</option>
                    <option>Услуга 2</option>
                    <option>Услуга 3</option>
                    <option>Услуга 4</option>
                </select> 
            </div>

            <div className='services-input-area'>
                <input className='services-input services-input-send' type='button' value='Отправить заявку'></input> 
            </div>
        </div>
    )
}

export default GetService;