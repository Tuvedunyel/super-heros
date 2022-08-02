import './sass/style.scss';
import { FC } from "react";
import question from './assets/question.png';

const App: FC = () => {

  return (
    <div className="App">
      <div className="container">
          <section className="top">
              <h1>
                  Êtes vous un
                  <span>super héros</span>
                  <span>de la communication</span>
                  de rentrée ?
              </h1>
          </section>
          <section className="bottom">
              <button className="btn no-btn">Pas du tout <span className="pseudo-bg">Pas du tout </span></button>
              <div className="questionMen" style={{ background: `url(${question}) no-repeat center 0 ` }} ></div>
              <button className="btn yes-btn">Carrément<span className="pseudo-bg">Carrément</span></button>
          </section>
      </div>
    </div>
  )
}

export default App
