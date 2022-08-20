import "./index.css";

const Overview = () => {
  return (
   <div className="Overview">
       <div className="Overview__text">
       <h1>Let me spill the tea:</h1>
       <h2> What you gonna read about?</h2>
        <p > You're going to have an overwiew on who I am, my personality, my interests, my cultural background and my future plans. <br /> I'm sure you will enjoy your discover through my story. <br/> Don't forget to unleash your curiosity, I will enjoy answering to aaaall your questions!
    </p>
    </div>
    <div className="Overview__animation">
    <div id="container">
  <div className="steam" id="steam1"> </div>
  <div className="steam" id="steam2"> </div>
  <div className="steam" id="steam3"> </div>
  <div className="steam" id="steam4"> </div>

  <div id="cup">
    <div id="cup-body">
      <div id="cup-shade"></div>
    </div>
    <div id="cup-handle"></div>
  </div>

  <div id="saucer"></div>

  <div id="shadow"></div>
</div>
    </div>
   </div>
  )
};
export default Overview;
