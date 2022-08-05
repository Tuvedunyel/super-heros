import { FC, useEffect, useState } from 'react';
import { questions, Questions } from "./question";
import { useDispatch, useSelector } from "react-redux";
import { setGoodPoints, setBadPoints } from "../features/points.slice";
import { setEndGame } from "../features/playing.slice";
import FinishScreen from "./FinishScreen";
import supermanGif from '../assets/superman.gif'
import xmenGif from '../assets/xmen.gif'

const Slide: FC = () => {
    const slideQuestions: Questions = questions
    const [ a, setA ] = useState( 0 );
    const [ b, setB ] = useState( 1 );
    const endGame = useSelector( ( state: { playingSlice: { gameEnd: boolean } } ) => state.playingSlice.gameEnd );
    const dispatch = useDispatch();

    const handleClick = ( answer: boolean ) => {
        if (answer) {
            dispatch( setGoodPoints( 1 ) )
        } else {
            dispatch( setBadPoints( 1 ) )
        }
        if (b < slideQuestions.length) {
            setA( a + 1 );
            setB( b + 1 );
        } else {
            dispatch( setEndGame( true ) )
        }
    }


    return (
        <>
            {
                endGame ? (
                    <FinishScreen/>
                ) : (
                    <section className="slide">
                        {
                            slideQuestions.slice( a, b ).map( question => (
                                <div className="container-slide" key={ question.id }>
                                    <div
                                        className={ question.backgroundType ? `${ question.backgroundType } background` : "background" }
                                        style={ { background: `url(${ question.background }) no-repeat center center` } }>
                                    </div>
                                    <div className="top">
                                        <h2>
                                            { question.titleBlack[ 0 ] }
                                            <span className='titleBlue'>{ question.titleBlue }</span>
                                            { question.titleBlack[ 1 ] && question.titleBlack[ 1 ] }
                                        </h2>
                                    </div>
                                    <div className={ question.classes ? `${ question.classes } middle` : "middle" }>
                                        <ul>
                                            {
                                                question.imageUrl.map( ( image: string, index: number ) => (
                                                    <li key={ index } className={ question.type && question.type }>
                                                        <img src={ image } alt={ question.imageAlt }
                                                             className={ question.classes === "cyclop" ? 'cyclopTV' : '' }/>
                                                        { question.classes === "superman" &&
                                                            <img src={ supermanGif }
                                                                 alt="Gif de superman à la télévision"
                                                                 className="supermanGif"/>
                                                        }
                                                        {
                                                            question.classes === "cyclop" &&
                                                            <img src={ xmenGif } alt="Cyclop présenter le motion design"
                                                                 className="cyclop-gif"/>
                                                        }
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                    <div className="question-bottom">
                                        <button className="btn yes-btn" onClick={ () => handleClick( true ) }>Oui <span
                                            className="pseudo-bg">Oui</span></button>
                                        <button className="btn no-btn" onClick={ () => handleClick( false ) }>Non <span
                                            className="pseudo-bg">Non</span></button>
                                    </div>
                                </div>
                            ) )
                        }
                    </section>
                )
            }
        </>
    );
};

export default Slide;
