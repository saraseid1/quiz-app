import React, { useState } from 'react'
import "../styles/question.css";

const quizQuestions = [
    {
      
      question: 'What is the result of the following expression: 3 + 2 + "7"?',
      options: ['57', '12', '32', '37'],
      answer: '37'
    },
    {
      
      question: 'What does the isNaN() function do?',
      options: ['Returns true if the argument is not a number', 'Returns false if the argument is not a number', 'Returns true if the argument is a number', 'Returns false if the argument is a number'],
      answer: 'Returns true if the argument is not a number'
    },
    {
      
      question: 'What is the output of the following code: console.log(typeof [1, 2])?',
      options: ['Array', 'Object', 'undefined', 'number'],
      answer: 'Object'
    },
    {
      
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: ['The current function', 'The global object', 'The calling object', 'The new object'],
      answer: 'The calling object'
    },
    {
     
      question: 'Which of the following is not a valid JavaScript variable name?',
      options: ['myVariable', '_myVariable', '2myVariable', '$myVariable'],
      answer: '2myVariable'
    },
  
    {
      
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      answer: '<ul>'
    },
    {
      
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['text-color', 'color', 'font-color', 'text-style'],
      answer: 'color'
    },
    {
      
      question: 'Which CSS property is used to specify the space between the elements?',
      options: ['margin', 'spacing', 'padding', 'border'],
      answer: 'margin'
    },
    
  ];
  
  function Questions(props)  {
    console.log(props)
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[isCorrectAnswer, setIsCorrectAnswer] = useState();
    return (
      <div className='questions'>
      {props.quizIsStarted && 
        
          <>
          <h1>{currentQuestion + 1}</h1>
          <h2 className="q">{ quizQuestions[currentQuestion].question}</h2>
          
        

        {quizQuestions[currentQuestion].options.map(
         (o)=>(
          <>
          <input className='v' type="radio" name="q" value={o}  onClick={()=>
          {if(o===quizQuestions[currentQuestion].answer){
            setIsCorrectAnswer(true);
          }else{setIsCorrectAnswer(false);}}
          }/>
          {o}
          <br />
        </>
          ))}
          {isCorrectAnswer !== undefined &&
            <>{isCorrectAnswer ?
             
        <p className="c">That answer is correct</p>
        :
        <p className="w">That answer is incorrect</p>}
        </>}
        <button className="N" onClick={()=>setCurrentQuestion(currentQuestion + 1)}>Next</button>
        </>
      
      }
      </div>
    )
  }


export default Questions;
