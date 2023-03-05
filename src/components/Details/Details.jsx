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
                        <h3>{detail.title}</h3>
                        <img src={detail.poster}></img>
                        <p>{detail.description}</p>
                        <p>{detail.genres_column}</p>
                        <button onClick={goBack}>Back</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Details;