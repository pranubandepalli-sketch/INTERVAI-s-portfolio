const API="http://localhost:8080/api";
export async function getQuestions(role){
 const r=await fetch(`${API}/questions?role=${encodeURIComponent(role)}`);
 if(!r.ok) throw new Error("Unable to load questions"); return r.json();
}
export async function startInterview(candidateName,jobRole){
 const r=await fetch(`${API}/interviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidateName,jobRole})});
 if(!r.ok) throw new Error("Unable to start interview"); return r.json();
}
export async function submitAnswer(interviewId,questionId,answer){
 const r=await fetch(`${API}/interviews/${interviewId}/answer/${questionId}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer})});
 if(!r.ok) throw new Error("Unable to submit answer"); return r.json();
}
