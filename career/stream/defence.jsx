import './tech.css';

const Defence =()=>{
    return(
        <>
         <div className="tech">
            <div className="navba"> 
       <nav className= "text-black p-4 shadow-md">
      <div className="flex anchor justify-between items-center ">
        <h1 className="text-xl font-bold">@T</h1>
        <div className="flex gap-6"> 
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/streams" className="hover:text-blue-400">Streams</a>
         </div>
      </div>
    </nav>
        </div>
             <h1 className='explore'> About Defence Exams </h1>
              <div  className='Mcont'> 
                 <h4 className='about'>What's NDA ?</h4>
                    <p className='nda'> The NDA exam is conducted by the Union Public Service Commission(UPSC)
                        twice a year(NDA I in April and NDA II in September).
                        Training is held at National Defence Academy,Khadakwasla(Pune).
                    </p>
                    <div>
                        <div className="bank">
                     <p>1. Eligibility Criteria:</p>
                   <ul>
                    <li> Nationality: Must be citizen of India.</li>
                    <li> Age limit: 16.5 to 19.5(at time of joining) </li>
                    <li> Gender : Both girls and boys are eligible.</li>
                    <li> Qualification :</li>
                     <ul className='ult'> 
                        <li>For Army wing: 12th pass with any stream. </li>
                        <li>Air Force & Navy : 12th pass with PCM. </li></ul>
                       <li> Martial status: Only unmarried candidates are eligible.</li>
                       <li> Exam : Offline mode, two papers. Mathematics(300 marks),General Ability Test (GAT)-600 marks. </li>
                       <li> SBI interview</li>
                       <li> Training Center : 3 years training at NDA Pune → Graduation(BA, BSc,BTech depend on branch. ) 
                        After training you become Officer(Lieutenant/Flying Officer) </li>
                      <li> Salary: </li>
                       <ul  className='sub-li'>
                        <li> During training : Stipend ₹56,100/month</li>
                        <li> After Commissioning : Starting salary ₹70,000- ₹1,20,000/month</li>
                        <li> Free accommodation, ration, medical,transport,pension, e.t.c</li>
                    </ul>
                   </ul>
                   <p>Job Options: </p>
                   <ul>
                    <li> Indian Army</li>
                    <li> Indian Navy</li>
                    <li>Indian Airforce</li>
                    </ul>
                    </div>
                </div>
              <div className="bank">
                <h3 className='heding' >B.Tech in  Aeronautical Engineering via NDA</h3>
                <ul>
                    <li> Air Force Cadets: Get to pursue B.Tech in Aeronautical Engineering (Mechanical / Electronics specialization). This prepares you for technical roles in aviation, 
                        aircraft systems, missiles, drones, etc</li>
                     <li>Naval Cadets: Do B.Tech in Naval Architecture & Engineering, focusing on warship design, submarines,
                         and advanced naval systems.</li>
                      <li>Army (Technical Entry): While NDA doesn’t directly offer B.Tech in Defence Tech for Army cadets, some Army officers pursue advanced studies at MCEME (Military College of Electronics & Mechanical Engineering)
                         or DRDO-supported institutes after NDA.</li>
                </ul>
                <u className='parts'>Other Paths:</u>
                
                <ul> <p>1. Technical Entry Scheme (TES) – Indian Army</p>
                    <li>After 12th with PCM, you can apply separately (through Army TES entry). </li>
                    <p>2. Direct B.Tech in Aeronautical / Defence Technology (Civil Colleges) </p>
                    <li> You can join IITs, NITs, or private institutes offering Aeronautical / Aerospace Engineering.</li>
                    <li>Later, join the Armed Forces as an officer via AFCAT, CDS, TGC, or SSC Tech Entry. </li>
                    <p> 3. DRDO, HAL, ISRO, ADA, NAL</p>
                    <li>With B.Tech in Aerospace / Defence Tech, you can also work in defence R&D organisations like DRDO, Hindustan Aeronautics Ltd, or ISRO as a scientist/engineer. </li>
                  </ul>
                 
                

              </div>
            </div>
            <div className='footr'>
        <footer className= "  p-6 mt-20">
       <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Career Guide. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy"  className="hover:text-white">Privacy Policy</a>
          <a href="/terms"  className="hover:text-white">Terms</a>
          <a href="/help"  className="hover:text-white">Help</a>
         </div>
      </div>
    </footer>

     </div>
         </div>
        </>
    )
}
export default Defence;
