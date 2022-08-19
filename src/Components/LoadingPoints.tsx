import { FC, useState } from 'react';
import { setGoodPoints, setBadPoints } from "../features/points.slice";
import { useDispatch, useSelector } from "react-redux";

const LoadingPoints: FC = () => {
    const [ loading, setLoading ] = useState( true );

    return (
        <section className="loader">
            <div className="loader__inner">
                <h2>Merci pour vos réponse, nous calculons votre score</h2>
                <h3>Loading ...</h3>
            </div>
        </section>
    );
};

export default LoadingPoints;
