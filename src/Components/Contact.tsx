import { ChangeEvent, FC, FormEvent, useState } from 'react';
import bulleCarre from '../assets/bulle-carre.svg'
import axios from "axios";
import { useSelector } from "react-redux";

const Contact: FC<{ title: string, subTitle: string[], bulle: string }> = ( { title, subTitle, bulle } ) => {
    const [ sent, setSent ] = useState( false );
    const [ sentMessage, setSentMessage ] = useState< string | null >( null );
    const [ error, setError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState<string | null>( null );
    const [ name, setName ] = useState<string>( '' );
    const [ email, setEmail ] = useState<string>( '' );
    const [ organisation, setOrganisation ] = useState<string>( '' );
    const goodAnswers = useSelector( ( state: { pointsSlice: { goodAnswers: number } } ) => state.pointsSlice.goodAnswers );
    const totalAnswers = useSelector( ( state: { pointsSlice: { goodAnswers: number, badAnswers: number } } ) => state.pointsSlice.goodAnswers + state.pointsSlice.badAnswers );

    const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail( e.target.value );
        setError(false);
        setErrorMessage(null)
    }

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault()
        console.log('submit')

        if ( !email) {
            setError( true );
            setErrorMessage( "Veuillez saisir une adresse email" );
        } else if ( !validEmail( email )) {
            setError( true );
            setErrorMessage( "Veuillez entrer une adresse email valide" );
        } else if ( !errorMessage?.length) {
            setError( false );
            setErrorMessage( "" );
            const bodyFormData = new FormData();
            bodyFormData.set( 'nom', name );
            bodyFormData.set( "email", email );
            bodyFormData.set( 'score', `${ goodAnswers } + ${ totalAnswers }` )
            bodyFormData.set( 'organisation', organisation );
            axios( {
                method: "post",
                url: "https://www.btg-dev.com/btg-form-easteregg/wp-json/contact-form-7/v1/contact-forms/10/feedback",
                data: bodyFormData,
            } )
                .then( response => {
                    setSentMessage( response.data.message );
                    setSent( true );
                    return true;
                } )
                .catch( err => console.log( err ) );
        }
    };


    const validEmail = ( mail: string ) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test( mail );
    };


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
                        { subTitle.map( ( title, index ) => (
                            <span key={ index }>{ title }</span>
                        ) ) }
                    </h3>
                </div>
            </div>
            { sent ? (
                <div className="sent">
                        <div className="success">
                            <h3>{ sentMessage }</h3>
                        </div>
                </div>
            ) : (
                <form>
                    { error && (
                        <div className="error">
                            <h3>{ errorMessage }</h3>
                        </div>
                    ) }
                    <label htmlFor="nom" className="form-label">
                    <span className="label">
                        Votre nom de héros<sup>*</sup>
                    </span>
                        <input type="text" name="nom" id="nom" required
                               onChange={ ( e ) => setName( e.target.value ) }/>
                    </label>
                    <label htmlFor="mail" className="form-label">
                    <span className="label">
                        Votre mail de mission<sup>*</sup>
                    </span>
                        <input type="mail" name="mail" id="mail" required
                               onChange={ ( e ) => handleMail(e) }/>
                    </label>
                    <label htmlFor="organisation" className="form-label">
                    <span className="label">
                        Votre organisation<sup>*</sup>
                    </span>
                        <input type="text" name="organisation" id="organisation" required
                               onChange={ ( e ) => setOrganisation( e.target.value ) }/>
                    </label>
                    <button className="btn yes-btn" onClick={ handleSubmit }>Je suis prêt.e<span
                        className="pseudo-bg">Je suis prêt.e</span></button>
                </form>
            ) }
        </section>
    );
};

export default Contact;
