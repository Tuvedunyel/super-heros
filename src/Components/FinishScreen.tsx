import { FC, useEffect, useState } from 'react';
import { finishData, FinishData } from "./finishData";
import { useSelector } from "react-redux";
import bulleCarre from './../assets/bulle-carre.svg'
import bulleRond from './../assets/bulle-rond.svg'
import Contact from "./Contact";

const FinishScreen: FC = () => {
    const [ data, setData ] = useState<FinishData>( finishData );
    const goodAnswers = useSelector( ( state: { pointsSlice: { goodAnswers: number } } ) => state.pointsSlice.goodAnswers );
    const [ openContact, setOpenContact ] = useState<boolean>( false );
    const [ title, setTitle ] = useState<string | null>( null );
    const [ subTitle, setSubTitle ] = useState<string[] | null>( null );
    const [ bulle, setBulle ] = useState<string | null>( null );

    useEffect( () => {
        if (goodAnswers === 10) {
            setData( finishData.slice( 0, 1 ) )
            setTitle( 'Alors comme ça on est super ?' );
            setSubTitle( [ 'Vous êtes un exemple pour nous tous.', 'Nous aimerions vous parler de votre prochaine mission' ] )
            setBulle( 'Mais pas un mot' )
        } else if (goodAnswers > 5 && goodAnswers < 10) {
            setData( finishData.slice( 1, 2 ) )
            setTitle( 'Alors, bientôt un.e super héros ?' )
            setSubTitle( [ 'Vous êtes en bonne voie.', 'Nous aimerions vous proposer une mission.' ] )
            setBulle( 'Chut' )
        } else if (goodAnswers > 1 && goodAnswers < 6) {
            setData( finishData.slice( 2, 3 ) )
            setTitle( 'ALors, prêt.e pour le stage de perfectionnement?' )
            setSubTitle( [ 'Il y a du travail, mais on sait que vous êtes prêt.e à relever le défi.', 'Nous vous suivons depuis quelques temps.' ] )
            setBulle( 'Ne le dites pas' )
        } else {
            setData( finishData.slice( 3, 4 ) )
            setTitle( 'Bon... Il faut vraiment que l\'on parle...' )
            setSubTitle( [ 'C\'est pas gagné mais on va pouvoir vous faire passer d\'humain', 'à super héros qui sauve des vies.' ] )
            setBulle( 'Courage' )
        }
    }, [ goodAnswers ] )

    return (
        <>
            { openContact ? (
                <Contact title={ title } subTitle={ subTitle } bulle={ bulle }/>
            ) : (
                <>
                    { data.map( item => (
                        <section key={ item.id } className="final">
                            <div className="top">
                                <h2>
                                    { item.titles.map( ( title, index ) => (
                                        <span key={ index }>{ title }</span>
                                    ) ) }
                                </h2>
                            </div>
                            <div className="bottom">
                                <div className="final-img-container">
                                    <img src={ item.img.url } alt={ item.img.alt } className="final-img"/>
                                </div>
                                <div className="right">
                                    <div className="right-top">
                                        <div className=" text-bulle text-bulle-carre">
                                    <span>
                                        { item.infoBulleDeux }
                                    </span>
                                            <img src={ bulleCarre } alt="Bulle de BD"/>
                                        </div>
                                        <div className=" text-bulle text-bulle-rond">
                                    <span>
                                        { item.infoBulleUn }
                                    </span>
                                            <img src={ bulleRond } alt="Bulle de BD"/>
                                        </div>
                                    </div>
                                    <div className="right-bottom">
                                        <button className='btn yes-btn'
                                                onClick={ () => setOpenContact( true ) }>{ item.textButton }<span
                                            className="pseudo-bg">{ item.textButton }</span></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) ) }
                </>
            ) }
        </>

    );
};

export default FinishScreen;
