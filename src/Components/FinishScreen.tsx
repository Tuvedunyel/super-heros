import { FC, useEffect, useState } from 'react';
import { finishData, FinishData } from "./finishData";
import { useSelector } from "react-redux";
import bulleCarre from './../assets/bulle-carre.svg'
import bulleRond from './../assets/bulle-rond.svg'

const FinishScreen: FC = () => {
    const [data, setData] = useState<FinishData>(finishData);
    const goodAnswer = useSelector((state: { pointsSlice: { goodAnswers: number } }) => state.pointsSlice.goodAnswers);
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);

    useEffect( () => {
        console.log(goodAnswer)
        if ( goodAnswer === 10 ) {
            setData(finishData.slice(0, 1))
        } else if ( goodAnswer > 5 && goodAnswer < 10 ) {
            setData(finishData.slice(1, 2))
        } else if ( goodAnswer > 1 && goodAnswer < 6 ) {
            setData(finishData.slice(2, 3))
        } else {
            setData(finishData.slice(3, 4))
        }
    }, [goodAnswer])

    return (
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
                                <button className='btn yes-btn'>{ item.textButton }<span
                                    className="pseudo-bg">{ item.textButton }</span></button>
                            </div>
                        </div>
                    </div>
                </section>
            ) ) }
        </>
    );
};

export default FinishScreen;
