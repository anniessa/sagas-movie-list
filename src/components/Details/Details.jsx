import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Details.css'


function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details);

    const goBack = () => {
        history.push('/');
    }

    return (
        
        <section>
            {/* mapping over the details reducer array */}
            {details.map(detail => {
                return (
                    <div key={detail.id}
                        className="detail-card">
                        <h1 className='title'>{detail.title}</h1>
                        <img src={detail.poster} className='detail-image'></img>
                        <p className='detail-description'>{detail.description}</p>
                        <p className='genres'>{detail.genres_column}</p>
                        <button className='back-btn' onClick={goBack}>Back</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Details;