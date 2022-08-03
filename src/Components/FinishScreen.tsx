import { FC, useState } from 'react';
import { finishData, FinishData } from "./finishData";
import bulleCarre from './../assets/bulle-carre.svg'
import bulleRond from './../assets/bulle-rond.svg'

const FinishScreen: FC = () => {
    const data: FinishData = finishData;
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);

    return (
        <>
            { data.slice(a, b).map( item => (
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
