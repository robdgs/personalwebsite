import "./index.css";

const Hero = () => {
  return <div className="Hero" >
    <div className="Hero__spinner"></div>
    <div className="Hero__img-container">
        <img className="Hero__img" src={require('./foto.jpg') } alt="me" />
    </div>
    <div className="Hero__text">
      <h1>Hi! <br /> Welcome to my WebSite!</h1>
      <h2>I'm <span className="Hero__text-underline"> Roberta D'Agostino </span> and I'm a junior Frontend Developer.</h2>

      <p>Let's scroll down to read my Story!</p>
    </div>
  </div>
};

export default Hero;
