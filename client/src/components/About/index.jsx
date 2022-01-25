import './style.css';

function About() {
    return (
        <div className="about">
            <div className="about-hero">
                <h1 className="mission">Миссия компании</h1>
                <span className="about-subtitle">
                Наша команда имеет большой опыт разработки программных продуктов для российских и зарубежных компаний. Мы разрабатываем высокотехнологичные программные продукты используя различные языки программирования и технологии разработки.
В нашей команде работают высококвалифицированные сотрудники с 10-20-летним опытом работы в IT сфере.
                </span>
            </div>

            <div className='about-container'>
                <h2 className='about-container-title'>Наша команда</h2>
                <div className='about-workers'>

                    <div className='about-workers-item'>
                        <div className='workers-img workers-img-1'></div>
                        <div className='workers-post'>Аналитик</div>
                    </div>

                    <div className='about-workers-item'>
                        <div className='workers-img workers-img-2'></div>
                        <div className='workers-post'>Разработчик</div>
                    </div>

                    <div className='about-workers-item'>
                        <div className='workers-img workers-img-3'></div>
                        <div className='workers-post'>Тестировщик</div>
                    </div>

                </div>
            </div>

            <div className='about-container'>
                <h2 className='about-container-title'>Нам доверяют</h2>
                <div className='about-companies'>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-1'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-2'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-3'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-4'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-5'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-6'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-7'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-8'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-9'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-10'></div>
                    </div>

                    <div className='about-companies-item'>
                        <div className='companies-img companies-img-11'></div>
                    </div>

                </div>
            </div>
        </div> 
    );
} 

export default About;
