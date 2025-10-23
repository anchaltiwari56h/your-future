import './medical.css';

const Research =()=>{
    return(
        <>
        <div className="medical">
            <div className="navbr"> 
            <nav className= " p-4 shadow-md">
            <div className="flex justify-between items-center ">
            <h1 className="text-xl font-bold">@T</h1>
            <div className="flex gap-6"> 
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/streams" className="hover:text-blue-400">Streams</a>
           </div>
            </div>
            </nav>
            </div>
            <h1 className='bio'> 🌿 Biology Stream – Research & Advanced Studies Careers</h1>
            <div className="bams">
                <h2>Integrated M.Sc (Biological Sciences) </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (55–60%). Admission via entrance exams (IISER, NEST, state universities). </li>
                    <li>Description: A 5-year integrated program focused on advanced biology research and specialization. </li>
                    <li> Job Scope: Research institutes, teaching, biotech/pharma companies, pursue PhD.</li>
                    <li>Average Package: ₹4–8 LPA. </li>
                </ul>
            </div>
             <div className="bams">
                <h2> Clinical Research</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%) + degree in Life Sciences (B.Sc in Bio, Biotech, Pharma, MBBS, etc.). </li>
                    <li>Description: Research on safety and effectiveness of new drugs, vaccines, and therapies. </li>
                    <li> Job Scope: Pharma companies, hospitals, CROs (Clinical Research Organizations).</li>
                    <li> Average Package: ₹4–7 LPA.</li>
                </ul>
            </div>
             <div className="bams">
                <h2>Biomedical Science </h2>
                <ul>
                    <li> Eligibility: 10+2 with PCB (50%). Some universities require entrance exams.</li>
                    <li>Description: Study of human biology and disease at molecular and cellular level. </li>
                    <li> Job Scope: Hospitals, diagnostic labs, research centers, biotech firms.</li>
                    <li>Average Package: ₹4–8 LPA. </li>
                </ul>
            </div>
             <div className="bams">
                <h2> Neuroscience</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%) → then B.Sc Neuroscience / MBBS / Psychology background. </li>
                    <li> Description: Study of brain, nervous system, and neurological disorders.</li>
                    <li> Job Scope: Hospitals, neuroscience labs, mental health research.</li>
                    <li>Average Package: ₹5–10 LPA. </li>
                </ul>
            </div>
             <div className="bams">
                <h2> Bioinformatics</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM + B.Sc in Bioinformatics/Biotech/CS. </li>
                    <li>Description: Combines biology with computer science to analyze biological/genetic data. </li>
                    <li> Job Scope: IT in pharma/biotech, genomics research, data science in healthcare.</li>
                    <li>Average Package: ₹4–9 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>Marine Biology </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). B.Sc Marine Biology / B.Sc Zoology (with specialization). </li>
                    <li>Description: Study of oceans, marine life, and ecosystems. </li>
                    <li>Job Scope: Govt ocean research centers, conservation NGOs, aquariums, marine projects. </li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>
             <div className="bams">
                <h1 className='bio'> 🌿 Biology Stream – Other Professional Paths</h1>
                <h2>Teaching (after B.Ed / higher studies) </h2>
                <ul>
                    <li>Eligibility: </li>
                    <ul className='sub-ul'>
                        <li> For School Teacher → B.Sc (Biology-related subject) + B.Ed.</li>
                        <li>For Lecturer/Professor → M.Sc/Ph.D. in Biology or related fields. </li>
                    </ul>
                    <li> Description: Teaching Biology and related subjects in schools, colleges, or universities.</li>
                    <li>Job Scope: Schools, coaching institutes, universities, research + teaching. </li>
                    <li>Average Package: </li>
                     <ul className='sub-ul'>
                        <li>School teacher → ₹3–6 LPA</li>
                        <li>College lecturer → ₹5–10 LPA</li>
                        <li>Professor (Ph.D.) → ₹8–15 LPA+ </li>
                    </ul>
                </ul>
            </div>
             <div className="bams">
                <h2> UPSC, SSC, Banking, Govt Exams</h2>
                <ul>
                    <li>Eligibility: Graduation in any stream (Biology/Science degree accepted). Age limits apply depending on exam. </li>
                    <li>Description: Competitive exams for administrative, clerical, or officer-level government jobs. </li>
                    <li>Job Scope: IAS/IPS (via UPSC), SSC CGL jobs, Banking PO/Clerk, State PCS. </li>
                    <li>Average Package: ₹4–12 LPA (as per govt pay scale and position). </li>
                </ul>
            </div>
             <div className="bams">
                <h2> Management (MBA in Healthcare / Hospital Management)</h2>
                <ul>
                    <li>Eligibility: Graduation in Biology/Science/Pharmacy/Medical field (50%) + Entrance exam (CAT, MAT, XAT, CMAT). </li>
                    <li> Description: Combines management with healthcare knowledge to run hospitals, clinics, and pharma businesses.</li>
                    <li>Job Scope: Hospital administrator, healthcare consultant, pharma management roles. </li>
                    <li>Average Package: ₹6–15 LPA. </li>
                </ul>
            </div>
             <div className='futr'>
            <footer className= " p-6 mt-20">
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

export default Research;