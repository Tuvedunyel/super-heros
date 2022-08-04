import { FC } from 'react';
import bulleCarre from '../assets/bulle-carre.svg'

const Contact: FC< { title: string, subTitle: string[], bulle: string } > = ({ title, subTitle, bulle }) => {


    return (
        <section className="contact">
            <div className="hero-banner">
                <h2>{ title }</h2>
                <div className="second-part">
                    <div className="bulle">
                        <img src={ bulleCarre } alt="Infobulle"/>
                        { bulle }
                    </div>
                    <h3>
                        { subTitle.map((title, index) => (
                            <span key={index} >{title}</span>
                        ) ) }
                    </h3>
                </div>
            </div>
            <form>
                <label htmlFor="nom" className="form-label">
                    <span className="label">
                        Votre nom de héros<sup>*</sup>
                    </span>
                    <input type="text" name="nom" id="nom" required/>
                </label>
                <label htmlFor="mail" className="form-label">
                    <span className="label">
                        Votre mail de mission<sup>*</sup>
                    </span>
                    <input type="mail" name="mail" id="mail" required/>
                </label>
                <label htmlFor="organisation" className="form-label">
                    <span className="label">
                        Votre organisation<sup>*</sup>
                    </span>
                    <input type="text" name="organisation" id="organisation" required/>
                </label>
                <button className="btn yes-btn">Je suis prêt.e<span
                    className="pseudo-bg">Je suis prêt.e</span></button>
            </form>
        </section>
    );
};

export default Contact;
