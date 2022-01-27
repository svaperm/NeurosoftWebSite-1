import '../style.css'

function Question(props){
    return(
        <div className='support-container'>
            <h2 className='support-container-title'>{props.title}</h2>
            <span className='support-container-description'>
                {props.description}
            </span>
        </div>
    )
}

export default Question;