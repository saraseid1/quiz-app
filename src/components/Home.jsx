import { useState } from "react";

function Home(props) {
  return (
    <div className="home">
      <p className="heading">
        Dive into the thrill of knowledge with our captivating quizzes. Click to
        Start Now!
      </p>
      <button className="btn" onClick={() => props.setQuizIsStarted(true)}>
        Click here to Start
      </button>
    </div>
  );
}

export default Home;
