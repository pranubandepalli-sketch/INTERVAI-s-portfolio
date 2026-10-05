export default function Result({results,setPage}){
 const total=results.reduce((s,x)=>s+Number(x.score||0),0), max=results.length*10, pct=max?Math.round(total/max*100):0;
 return <div className="result"><h1>Interview Complete 🎉</h1><div className="score-circle">{pct}%</div><h2>Overall Score</h2>
 {results.map((x,i)=><div className="result-card" key={i}><h3>Question {i+1}</h3><p>{x.question}</p><p><b>Score:</b> {x.score}/10</p><p><b>Strength:</b> {x.strength}</p><p><b>Weakness:</b> {x.weakness}</p><p><b>Suggestion:</b> {x.suggestion}</p></div>)}
 <button onClick={()=>setPage("dashboard")}>Take Another Interview</button></div>;
}
