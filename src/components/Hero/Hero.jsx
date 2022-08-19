import "./index.css";

const Hero = () => {
  return <div className="Hero" >
    <div className="Hero__spinner"></div>
    <div className="Hero__img-container">
        <img className="Hero__img" src={require('./foto.jpg') } alt="me" />
    </div>
  </div>;
};

export default Hero;
