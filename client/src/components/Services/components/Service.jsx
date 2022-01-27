import '../style.css'

function Service(props){
    return(
        <div className='services-container'>
            <div className='services-container-text'>
                <h2 className='services-container-title'>{props.title}</h2>
                <span className='services-container-description'>
                    {props.description}
                </span>
            </div>
            <div className={'service-page-img service-img-' + props.img_num}></div>
        </div>
    )
}

export default Service;