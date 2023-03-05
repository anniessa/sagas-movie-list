import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details);

    // 
    const goBack = () =>  {
        history.push('/');
    }

    return (
        <div>
            <h3>Details Page</h3>
            <section>
                {/* mapping over the details reducer array */}
                {details.map(detail => {
                    return (
                        <div key={detail.id}>
                            <p>{detail.title}</p>
                            <img src={detail.poster}></img>
                            <p>{detail.description}</p>
                            <p>{detail.genres_column}</p>
                            <button onClick={goBack}>Back</button>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Details;