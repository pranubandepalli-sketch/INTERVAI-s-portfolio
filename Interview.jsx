import {useEffect,useState} from "react";
import {getQuestions,startInterview,submitAnswer} from "../services/api";

export default function Interview({interviewData,setPage,setResults}){
 const [questions,setQuestions]=useState([]),[current,setCurrent]=useState(0),[answer,setAnswer]=useState(""),[interviewId,setInterviewId]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{(async()=>{try{const i=await startInterview(interviewData.candidateName,interviewData.jobRole);setInterviewId(i.id);const q=await getQuestions(interviewData.jobRole);setQuestions(q.slice(0,5));}catch(e){alert(e.message)}finally{setLoading(false)}})()},[interviewData]);
 async function next(){if(!answer.trim()) return alert("Please enter an answer."); try{const r=await submitAnswer(interviewId,questions[current].id,answer);setResults(p=>[...p,{question:questions[current].questionText,answer,...r}]);setAnswer(""); if(current+1<questions.length)setCurrent(current+1);else setPage("result")}catch(e){alert(e.message)}}
 if(loading)return <div className="loading">Loading interview...</div>;
 if(!questions.length)return <div className="loading">No questions available. Import database/sample-data.sql first.</div>;
 const q=questions[current]; const pct=((current+1)/questions.length)*100;
 return <div className="interview"><div className="interview-header"><h2>{interviewData.jobRole}</h2><span>Question {current+1} / {questions.length}</span></div><div className="progress"><div style={{width:`${pct}%`}}/></div>
 <div className="question-card"><h2>{q.questionText}</h2><textarea value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Type your answer here..."/><button onClick={next}>{current+1===questions.length?"Finish Interview":"Submit & Next"}</button></div></div>;
}
