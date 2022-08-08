import './sass/style.scss';
import { FC } from "react";
import question from './assets/question.png';
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "./features/playing.slice";
import Slide from "./Components/Slide";

const App: FC = () => {
    const isPlaying = useSelector( ( state: { playingSlice: { playingSlice: boolean } } ) => state.playingSlice.playingSlice );
    const gameEnd = useSelector( ( state: { playingSlice: { gameEnd: boolean } } ) => state.playingSlice.gameEnd );
    const dispatch = useDispatch()


    return (
        <div className={ isPlaying && !gameEnd ? 'playing App' : 'App' }>
            <div className="container">
                { isPlaying ? (
                    <Slide />
                ) : (
                    <>
                        <section className="top">
                            <h1>
                                Êtes vous un
                                <span>super héros</span>
                                <span>de la communication</span>
                                de rentrée ?
                            </h1>
                        </section>
                        <section className="bottom front">
                            <button className="btn no-btn" onClick={ () => dispatch( setPlaying( true ) ) }>Pas du
                                tout <span className="pseudo-bg">Pas du tout </span></button>
                            <div className="questionMen"
                                 style={ { background: `url(${ question }) no-repeat center 0 ` } }></div>
                            <button className="btn yes-btn"
                                    onClick={ () => dispatch( setPlaying( true ) ) }>Carrément<span
                                className="pseudo-bg">Carrément</span></button>
                        </section>
                    </>
                    ) }
            </div>
        </div>
    )
}

export default App
