import React from "react";
import UserProfile from "./UserProfile";
import alexa from "../assets/alexa.png";
import cortana from "../assets/cortana.png";
import siri from "../assets/siri.png";
import "bulma/css/bulma.css";
const data = [
  {
    img: alexa,
    h3: "Alexa",
    h5: "@alexa99",
    p: "I'll help you buy stuff off Amazon",
  },
  {
    img: cortana,
    h3: "Cortana",
    h5: "@cortana12",
    p: "Personal assistant by Microsoft",
  },
  {
    img: siri,
    h3: "Siri",
    h5: "@siri44",
    p: "I don't get a lot of updates anymore",
  },
];

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title"> Personal Digital Assistance</p>
        </div>
      </section>

      <section className="section" >
        <div className="columns" style={{justifyContent:'space-evenly'}}>
          <div className="column is-3">
            <UserProfile
              img={data[0].img}
              h3={data[0].h3}
              h5={data[0].h5}
              p={data[0].p}
            />
          </div>
          <div className="column is-3">
            <UserProfile
              img={data[1].img}
              h3={data[1].h3}
              h5={data[1].h5}
              p={data[1].p}
            />
          </div>
          <div className="column is-3">
            <UserProfile
              img={data[2].img}
              h3={data[2].h3}
              h5={data[2].h5}
              p={data[2].p}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
