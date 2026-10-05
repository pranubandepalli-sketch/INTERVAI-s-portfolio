import {useState} from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Result from "./pages/Result";

export default function App(){
 const [page,setPage]=useState("home");
 const [interviewData,setInterviewData]=useState(null);
 const [results,setResults]=useState([]);
 return <>
  {page==="home"&&<Home setPage={setPage}/>}
  {page==="dashboard"&&<Dashboard setPage={setPage} setInterviewData={setInterviewData}/>}
  {page==="interview"&&<Interview interviewData={interviewData} setPage={setPage} setResults={setResults}/>}
  {page==="result"&&<Result results={results} setPage={setPage}/>}
 </>;
}
