import { FC, useEffect, useState } from 'react';
import { finishData, FinishData } from "./finishData";
import { useSelector } from "react-redux";
import bulleCarre from './../assets/bulle-carre.svg'
import bulleRond from './../assets/bulle-rond.svg'
import Contact from "./Contact";

const FinishScreen: FC = () => {
    const [data, setData] = useState<FinishData>(finishData);
    const goodAnswers = useSelector((state: { pointsSlice: { goodAnswers: number } }) => state.pointsSlice.goodAnswers);
    const [ openContact, setOpenContact ] = useState<boolean>(false);

    useEffect( () => {
        if ( goodAnswers === 10 ) {
            setData(finishData.slice(0, 1))
        } else if ( goodAnswers > 5 && goodAnswers < 10 ) {
            setData(finishData.slice(1, 2))
        } else if ( goodAnswers > 1 && goodAnswers < 6 ) {
            setData(finishData.slice(2, 3))
        } else {
            setData(finishData.slice(3, 4))
        }
    }, [goodAnswers])

    return (
        <>
            { openContact ? (
                <Contact title={title} subTitle={subTitle} bulle={bulle} />
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
                                        <button className='btn yes-btn' onClick={() => setOpenContact(true)}>{ item.textButton }<span
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
