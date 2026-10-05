export default function Home({setPage}){
 return <><nav><h2>IntervAI</h2><button onClick={()=>setPage("dashboard")}>Start Interview</button></nav>
 <section className="hero"><div><h1>Ace Your Next Interview</h1><p>Practice technical interviews, receive instant feedback and improve your performance.</p><button onClick={()=>setPage("dashboard")}>Start Mock Interview →</button></div></section></>;
}
