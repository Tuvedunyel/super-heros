import { FC, useEffect, useState } from 'react';
import { setGoodPoints, setBadPoints } from "../features/points.slice";
import { useDispatch, useSelector } from "react-redux";
import FinishScreen from "./FinishScreen";

const LoadingPoints: FC = () => {
    const [ loading, setLoading ] = useState( true );
    const [ loader, setLoader ] = useState( 0 )
    const answers = useSelector( ( state: { pointsSlice: { answers: { id: number, goodAnswer: number, badAnswer: number }[] } } ) => state.pointsSlice.answers );
    const dispatch = useDispatch();

    useEffect( () => {
        answers.map( ( answer ) => {
            dispatch( setGoodPoints( answer.goodAnswer ) );
            dispatch( setBadPoints( answer.badAnswer ) );
        } )
    }, [] )

    useEffect( () => {
        if (loader < 100) {
            setInterval( () => {
                setLoader( loader + 10 )
            }, 100 )
        } else {
            setLoading( false )
        }
        setTimeout( () => {
            setLoading( false )
        }, 3000 )
    }, [ loader ] )

    return (
        <>
            { loading ? (
                <section className="loader">
                    <div className="loader__inner">
                        <h2>Merci pour vos réponse</h2>
                        <h3>Nous calculons votre score</h3>
                        <strong>{ `${ loader }%` }</strong>
                    </div>
                </section>
            ) : (
                <FinishScreen/>
            ) }
        </>
    );
};

export default LoadingPoints;
