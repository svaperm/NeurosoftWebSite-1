import './style.css';

const Landing = () => (
  <div className="landing">
    <div className="landing-hero">
      <h1 className="landing-title">нейрософт глобал</h1>
      <span className="landing-subtitle">
        высокотехнологичные программные продукты для российских и зарубежных
        компаний
      </span>
      <div className="hero-world"></div>
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">Наши услуги</h2>
      <div className="landing-services">
        <div className="landing-services-item">
          <div className="service-img service-img-1"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-2"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-3"></div>
        </div>
        <div className="landing-services-item">
          <div className="service-img service-img-4"></div>
        </div>
      </div>
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">Почему мы?</h2>
    </div>
    <div className="landing-container">
      <h2 className="landing-container-title">Преимущества</h2>
    </div>
  </div>
);

export default Landing;
