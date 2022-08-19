import { FC, useEffect, useState } from 'react';
import { questions, Questions, Question } from "./question";
import { useDispatch, useSelector } from "react-redux";
import { editAnswers, addAnswers, setBadPoints, setGoodPoints, setEdit } from "../features/points.slice";
import { setEndGame } from "../features/playing.slice";
import FinishScreen from "./FinishScreen";
import { assets } from './assets'

const Slide: FC = () => {
    const slideQuestions: Questions = questions
    const [ a, setA ] = useState( 0 );
    const [ b, setB ] = useState( 1 );
    const endGame = useSelector( ( state: { playingSlice: { gameEnd: boolean } } ) => state.playingSlice.gameEnd );
    const edit = useSelector( ( state: { pointsSlice: { edit: boolean } } ) => state.pointsSlice.edit );
    const answers = useSelector( ( state: { pointsSlice: { answers: { id: number, goodAnswer: number, badAnswer: number }[] } } ) => state.pointsSlice.answers );
    const dispatch = useDispatch();

    useEffect( () => {
        answers.map( answer => {
            if ( answer.id === slideQuestions[a].id ) {
                dispatch( setEdit(true) )
            }
        } )
    } )


    const handleClick = ( id: number, answer: boolean ) => {
        if (edit) {
            if (answer) {
                dispatch( editAnswers( { id, goodAnswer: 1, badAnswer: 0 } ) );
            } else {
                dispatch( editAnswers( { id, goodAnswer: 0, badAnswer: 1 } ) );
            }
            dispatch(setEdit(false))
        } else {
            if (answer) {
                dispatch( addAnswers( { id, goodAnswer: 1, badAnswer: 0 } ) );
            } else {
                dispatch( addAnswers( { id, goodAnswer: 0, badAnswer: 1 } ) );
            }
            dispatch(setEdit(false))
        }
        if (b < slideQuestions.length) {
            setA( a + 1 );
            setB( b + 1 );
        } else {
            answers.map( ( answer ) => {
                dispatch( setGoodPoints( answer.goodAnswer ) );
                dispatch( setBadPoints( answer.badAnswer ) );
            } )
            dispatch( setEndGame( true ) )
        }
    }

    const handlePrev = () => {
        dispatch( setEdit( true ) )
        setA( a - 1 );
        setB( b - 1 );
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
                                                            <>
                                                                <img src={ assets.supermanGif }
                                                                     alt="Gif de superman à la télévision"
                                                                     className="supermanGif"/>
                                                                <img src={ assets.icon } alt="Slode comme un roc !"
                                                                     className="iconeBuble"/>
                                                            </>
                                                        }
                                                        {
                                                            question.classes === "cyclop" &&
                                                            <img src={ assets.xmenGif }
                                                                 alt="Cyclop présenter le motion design"
                                                                 className="cyclop-gif"/>
                                                        }
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                    <div className="question-back-container">
                                        <div className="question-bottom">
                                            <button className="btn yes-btn"
                                                    onClick={ () => handleClick( question.id, true ) }>Oui <span
                                                className="pseudo-bg">Oui</span></button>
                                            <button className="btn no-btn"
                                                    onClick={ () => handleClick( question.id, false ) }>Non <span
                                                className="pseudo-bg">Non</span></button>
                                        </div>
                                        {
                                            a > 0 &&
                                            <h4 className="back-question" onClick={ handlePrev }>&#10094; Retour à la
                                                question précédente</h4>
                                        }
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
