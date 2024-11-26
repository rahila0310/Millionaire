import React, { useState, useEffect } from "react";

const moneyPyramid = [
  { id: 1, amount: ". 100$" },
  { id: 2, amount: ". 200$" },
  { id: 3, amount: ". 300$" },
  { id: 4, amount: ". 500$" },
  { id: 5, amount: ". 1.000$" },
  { id: 6, amount: ". 2.000$" },
  { id: 7, amount: ". 4.000$" },
  { id: 8, amount: ". 8.000$" },
  { id: 9, amount: ". 16.000$" },
  { id: 10, amount: ". 32.000$" },
  { id: 11, amount: ". 64.000$" },
  { id: 12, amount: ". 125.000$" },
  { id: 13, amount: ". 250.000$" },
  { id: 14, amount: ". 500.000$" },
  { id: 15, amount: ". 1.000.000$" },
];

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctOption: 2,
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: 1,
  },
  {
    id: 3,
    question: "Which language is used for web development?",
    options: ["Python", "C#", "JavaScript", "Java"],
    correctOption: 2,
  },
];


const App = () => {

 
const [step, setStep] = useState(0)
const [start, setStart] = useState(false)
const [point, setPoint] = useState(0)
const [timer,setTimer] = useState(20)

function nextQuestion(answer) {
  setStep(step+1)
  answer == quizData[step].correctOption && setPoint(point + 1)
}

useEffect (() => {
  
  const interval = setInterval(() => {
    setTimer((count) => count -1)
  }, 1000)
  return () => clearInterval(interval)
}, [])



  return (
    <div className="h-screen w-screen flex  bg-purple-800 ">
      <div className=' h-screen w-3/4 bg-center bg-[url("https://pbs.twimg.com/media/EUjq8zxU8AAYs9I.jpg:large")] '>
      <button className="bg-gradient-to-bl from-white to-yellow-600 h-[100px] w-[100px] " onClick={() => setStart(true)}>Start</button>
      <div className="text-white mt-4 flex items-center justify-center text-5xl shadow-md shadow-purple-200 rounded-full bg-purple-400 border border-purple-900 h-[100px] w-[100px]">
          {timer}
          </div>
      

        <div className=" h-2/4 flex flex-col justify-end items-center ">
     
      {(start && step <= quizData.length - 1) &&
      (
        <div className="bg-white bg-opacity-[80%]  h-[500px] w-[700px] flex flex-col gap-[20px] items-center  justify-center">
          <div className="flex flex-col items-center justify-between">
          <div className="bg-blue-300 w-[300px] h-[50px]  ">{quizData[step].question}</div>
          <div className="flex flex-row gap-[20px] ">{quizData[step].options.map((quiz, index) => (
            <button key={index} onClick={() => nextQuestion(index)} className="bg-pink-300 rounded-lg h-[30px] w-[100px]">{quiz}</button>
          ))}</div>
         
         <div className="flex flex-col gap-[20px]">
          <button className="bg-yellow-200  w-20 h-20" onClick={()=> setStep(step+1)}>NEXT</button>
          <div className="text-3xl text-red-500 flex items-center justify-center ">{point}</div> 
          </div>
          </div>

          
          
        </div>

      )}
      {
        (step > quizData.length -1) && <div className="bg-slate-300 h-[70px] w-[200px] font flex items-center justify-center text-center">Finish {point} out of 3</div>
      }
      
      
    </div>
      </div>
      

      {/* right */}
      <div className="w-1/4 h-full flex flex-col-reverse">
        {moneyPyramid.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center h-16 border border-black font-serif rounded-2xl bg-gradient-to-r from-purple-300 to-purple-900 text-white text-2xl font-extralight cursor-pointer hover:rounded-full hover:bg-gradient-to-r  hover:from-white hover:to-white hover:text-black "
          >
            <span>{item.id}</span>
            <span className="ml-2">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;





