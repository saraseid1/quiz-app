import Navbar from "./components/Navbar";
import {Login} from "./components/Login";
import Questions from "./components/Questions";


import { SignUp } from "./components/SignUp";
import { useState } from "react";
import Home from "./components/Home";



function App() {
  const [QuizIsStarted, setQuizIsStarted] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowSignUp, setShowSignUp] = useState(false);
  return (
    <div className="app">
    <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} setQuizIsStarted={setQuizIsStarted}/>
    {QuizIsStarted? 
      <Questions quizIsStarted={QuizIsStarted} />
      :
      <>
      {ShowLogin? 
        <Login  />
        :
        <>
        {ShowSignUp? 
          <SignUp  />
          :
          <Home setQuizIsStarted={setQuizIsStarted} />
        }
        </>
      }
      </>
    }
    </div>
  );
}

export default App;
