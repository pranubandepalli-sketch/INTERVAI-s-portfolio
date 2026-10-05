import {useState} from "react";
export default function Dashboard({setPage,setInterviewData}){
 const [name,setName]=useState(""); const [role,setRole]=useState("Java Developer");
 function start(){if(!name.trim()) return alert("Please enter your name."); setInterviewData({candidateName:name,jobRole:role});setPage("interview");}
 return <div className="dashboard"><h1>Interview Dashboard</h1><div className="form-card">
 <label>Candidate Name</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"/>
 <label>Select Job Role</label><select value={role} onChange={e=>setRole(e.target.value)}><option>Java Developer</option><option>Python Developer</option><option>Full Stack Developer</option><option>Data Analyst</option></select>
 <button onClick={start}>Start Interview</button></div></div>;
}
