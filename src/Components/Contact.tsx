import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { assets } from './assets'
import axios from "axios";
import { useSelector } from "react-redux";

const Contact: FC<{ title: string, subTitle: string[], bulle: string }> = ( { title, subTitle, bulle } ) => {
    const [ sent, setSent ] = useState( false );
    const [ sentMessage, setSentMessage ] = useState<string | null>( null );
    const [ error, setError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState<string | null>( null );
    const [ name, setName ] = useState<string>( '' );
    const [ email, setEmail ] = useState<string>( '' );
    const [ organisation, setOrganisation ] = useState<string>( '' );
    const goodAnswers = useSelector( ( state: { pointsSlice: { goodAnswers: number } } ) => state.pointsSlice.goodAnswers );
    const totalAnswers = useSelector( ( state: { pointsSlice: { goodAnswers: number, badAnswers: number } } ) => state.pointsSlice.goodAnswers + state.pointsSlice.badAnswers );

    const handleMail = ( e: ChangeEvent<HTMLInputElement> ) => {
        setEmail( e.target.value );
        setError( false );
        setErrorMessage( null )
    }

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault()
        console.log( 'submit' )

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
            bodyFormData.set( 'score', `${ goodAnswers } / ${ totalAnswers }` )
            bodyFormData.set( 'organisation', organisation );
            axios( {
                method: "post",
                url: "https://www.btg-communication.fr/wp-json/contact-form-7/v1/contact-forms/5354/feedback",
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
                        <img src={ assets.bulleCarre } alt="Infobulle"/>
                        <img src={ assets.virgule } alt="Virgule de la bulle de BD" className="virgule"/>
                        <span>{ bulle }</span>
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
                        <h3>{ sentMessage }<br/> En attendant, rejoins nous sur les réseaux sociaux</h3>
                        <ul className="rs">
                            <li>
                                <a target="_blank" href="https://www.facebook.com/btg.communication/">
                                    <svg id="Groupe_37" data-name="Groupe 37" xmlns="http://www.w3.org/2000/svg"
                                         width="84.637" height="97.73" viewBox="0 0 84.637 97.73">
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect id="Rectangle_22" data-name="Rectangle 22" width="84.637"
                                                      height="97.73" fill="none"/>
                                            </clipPath>
                                        </defs>
                                        <g id="Groupe_36" data-name="Groupe 36" transform="translate(0 0)"
                                           clip-path="url(#clip-path)">
                                            <path id="Tracé_22" data-name="Tracé 22"
                                                  d="M369.458,295.2l1.51-9.847h-9.448v-6.39c0-2.694,1.32-5.32,5.551-5.32h4.3v-8.383a52.385,52.385,0,0,0-7.626-.665c-7.781,0-12.867,4.716-12.867,13.254v7.505h-8.649V295.2h8.649V319a34.423,34.423,0,0,0,10.645,0V295.2Z"
                                                  transform="translate(-314.478 -243.137)" fill="#fff"/>
                                            <path id="Tracé_23" data-name="Tracé 23"
                                                  d="M42.318,97.725,0,73.293V24.428l.324-.187L42.318,0,84.637,24.428V73.293l-.324.187ZM1.3,72.544,42.318,96.228,83.34,72.544V25.177L42.318,1.493,1.3,25.177Z"
                                                  transform="translate(0 0.005)" fill="#fff"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/btg_communication/">
                                    <svg id="Groupe_43" data-name="Groupe 43" xmlns="http://www.w3.org/2000/svg"
                                         width="84.637" height="97.73" viewBox="0 0 84.637 97.73">
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect id="Rectangle_25" data-name="Rectangle 25" width="84.637"
                                                      height="97.73" fill="none"/>
                                            </clipPath>
                                        </defs>
                                        <path id="Tracé_27" data-name="Tracé 27"
                                              d="M1.3,72.544V25.177L42.319,1.493,83.34,25.177V72.544L42.319,96.228ZM42.319,0,.324,24.24,0,24.428V73.293L42.319,97.725,84.313,73.48l.324-.187V24.428Z"
                                              transform="translate(0 0.005)" fill="#fff"/>
                                        <g id="Groupe_42" data-name="Groupe 42" transform="translate(0 0)">
                                            <g id="Groupe_41" data-name="Groupe 41" clip-path="url(#clip-path)">
                                                <path id="Tracé_28" data-name="Tracé 28"
                                                      d="M268.343,330.737c5.975,0,6.682.023,9.042.13a12.386,12.386,0,0,1,4.155.77,7.41,7.41,0,0,1,4.246,4.247,12.381,12.381,0,0,1,.771,4.155c.108,2.36.13,3.067.13,9.042s-.023,6.682-.13,9.042a12.381,12.381,0,0,1-.771,4.155,7.41,7.41,0,0,1-4.246,4.247,12.383,12.383,0,0,1-4.155.77c-2.359.108-3.067.13-9.042.13s-6.682-.023-9.042-.13a12.381,12.381,0,0,1-4.155-.77,7.41,7.41,0,0,1-4.247-4.247,12.383,12.383,0,0,1-.771-4.155c-.108-2.359-.13-3.067-.13-9.042s.023-6.682.13-9.042a12.383,12.383,0,0,1,.771-4.155,7.41,7.41,0,0,1,4.247-4.247,12.384,12.384,0,0,1,4.155-.77c2.359-.108,3.067-.13,9.042-.13m0-4.032c-6.077,0-6.839.026-9.225.135a16.427,16.427,0,0,0-5.432,1.04,11.442,11.442,0,0,0-6.544,6.544,16.426,16.426,0,0,0-1.04,5.432c-.109,2.387-.134,3.149-.134,9.225s.026,6.839.134,9.225a16.425,16.425,0,0,0,1.04,5.432,11.442,11.442,0,0,0,6.544,6.544,16.425,16.425,0,0,0,5.432,1.04c2.387.109,3.149.135,9.225.135s6.839-.026,9.225-.135a16.425,16.425,0,0,0,5.432-1.04,11.442,11.442,0,0,0,6.544-6.544,16.425,16.425,0,0,0,1.04-5.432c.109-2.387.135-3.149.135-9.225s-.026-6.839-.135-9.225a16.426,16.426,0,0,0-1.04-5.432A11.442,11.442,0,0,0,283,327.88a16.427,16.427,0,0,0-5.432-1.04c-2.387-.109-3.149-.135-9.225-.135m0,10.885a11.49,11.49,0,1,0,11.49,11.49,11.49,11.49,0,0,0-11.49-11.49m0,18.949a7.459,7.459,0,1,1,7.459-7.459,7.459,7.459,0,0,1-7.459,7.459m14.629-19.4a2.685,2.685,0,1,1-2.685-2.685,2.685,2.685,0,0,1,2.685,2.685"
                                                      transform="translate(-226.024 -300.216)" fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/btg-communication/">
                                    <svg id="Groupe_40" data-name="Groupe 40" xmlns="http://www.w3.org/2000/svg"
                                         width="84.637" height="97.73" viewBox="0 0 84.637 97.73">
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect id="Rectangle_24" data-name="Rectangle 24" width="84.637"
                                                      height="97.73" fill="none"/>
                                            </clipPath>
                                        </defs>
                                        <path id="Tracé_24" data-name="Tracé 24"
                                              d="M1.3,72.544V25.177L42.319,1.493,83.34,25.177V72.544L42.319,96.228ZM42.319,0,.324,24.24,0,24.428V73.293L42.319,97.725,84.313,73.48l.324-.187V24.428Z"
                                              transform="translate(0 0.005)" fill="#fff"/>
                                        <rect id="Rectangle_23" data-name="Rectangle 23" width="10.046" height="31.916"
                                              transform="translate(19.16 40.377)" fill="#fff"/>
                                        <g id="Groupe_39" data-name="Groupe 39" transform="translate(0 0)">
                                            <g id="Groupe_38" data-name="Groupe 38" clip-path="url(#clip-path)">
                                                <path id="Tracé_25" data-name="Tracé 25"
                                                      d="M232.621,312.694a5.768,5.768,0,1,1,5.792-5.767,5.688,5.688,0,0,1-5.792,5.767"
                                                      transform="translate(-208.438 -276.74)" fill="#fff"/>
                                                <path id="Tracé_26" data-name="Tracé 26"
                                                      d="M465.666,520.032H455.619V502.6c0-5.143-2.187-6.729-5.007-6.729-2.981,0-5.9,2.244-5.9,6.858v17.3H434.662V488.115h9.662v4.422h.128A10.961,10.961,0,0,1,454,487.218c5.606,0,11.664,3.325,11.664,13.074Z"
                                                      transform="translate(-399.42 -447.714)" fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
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
                               onChange={ ( e ) => handleMail( e ) }/>
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
