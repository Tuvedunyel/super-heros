import { FC } from 'react';
import { finishData, FinishData } from "./finishData";

const FinishScreen: FC = () => {
    const data: FinishData = finishData;

    return (
        <>
            { data.map( item => (
                <section key={ item.id } className="final">
                    <div className="top">
                        <h2></h2>
                    </div>
                </section>
            ) ) }
        </>
    );
};

export default FinishScreen;
