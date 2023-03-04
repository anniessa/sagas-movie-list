import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);

    return (
        <div>
            <h3>Details Page</h3>
            <section>
                {details.map(detail => {
                    return (
                        <div key={detail.id}>
                            <p>{detail.title}</p>
                            <img src={detail.poster}></img>
                            <p>{detail.description}</p>
                            <p>{detail.genres_column}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Details;