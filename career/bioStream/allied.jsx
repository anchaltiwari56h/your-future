import './medical.css';
const Allied = ()=>{
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
            <h1 className='bio'>🌿 Biology Stream – Allied & Life Sciences Careers </h1>
            
             <div className="bams">
                <h2> B.Sc in Biotechnology</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (50%). Some colleges require entrance tests. </li>
                    <li>Description: Combines biology + technology for industrial, agricultural, and medical innovations. </li>
                    <li> Job Scope: Biotech firms, pharma, agriculture R&D, food industry.</li>
                    <li>Average Package: ₹3–8 LPA. </li>
                </ul>
            </div>
                <div className="bams">
                <h2>B.Sc in Microbiology </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). Entrance in some universities. </li>
                    <li>Description: Study of microorganisms like bacteria, fungi, viruses. </li>
                    <li>ob Scope: Diagnostic labs, pharma, food safety, research institutes. </li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>

                      <div className="bams">
                <h2>B.Sc in Genetics </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (50%). </li>
                    <li>Description: Study of DNA, heredity, genetic engineering, gene therapy. </li>
                    <li>Job Scope: Research labs, IVF centers, pharma, hospitals. </li>
                    <li>Average Package: ₹4–7 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2> B.Sc in Biochemistry</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%).</li>
                    <li> Description: Study of chemical processes in living organisms.</li>
                    <li>Job Scope: Research labs, pharma, biotech, diagnostics. </li>
                    <li> Average Package: ₹3–6 LPA.</li>
                </ul>
            </div>
            <div className="bams">
                <h2> B.Sc in Forensic Science</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (50%).</li>
                    <li>Description: Application of science for crime investigation. </li>
                    <li>Job Scope: Forensic labs, police, CBI, detective firms. </li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>B.Sc in Environmental Science </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). </li>
                    <li>Description: Study of environment, ecology, conservation, pollution control. </li>
                    <li> Job Scope: Govt environment agencies, NGOs, research labs.</li>
                    <li>Average Package: ₹3–5 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>B.Sc in Zoology / Botany </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). </li>
                    <li> Description: Zoology – study of animals, Botany – study of plants.</li>
                    <li> Job Scope: Teaching, forestry, research labs, govt jobs.</li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>B.Sc in Agriculture / Horticulture / Forestry </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM/PCMB (50%) + ICAR AIEEA or state entrance exams. </li>
                    <li>Description: Agriculture – crop science; Horticulture – fruits/vegetables; Forestry – forest management </li>
                    <li>Job Scope: Govt agricultural services, agribusiness, ICAR, research labs. </li>
                    <li>Average Package: ₹4–7 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2> B.Sc in Food Technology</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (50%). </li>
                    <li>Description: Study of food safety, processing, and preservation. </li>
                    <li>Job Scope: Food industries, quality control, FMCG companies.</li>
                    <li> Average Package: ₹4–7 LPA.</li>
                </ul>
            </div>
            <div className="bams">
                <h2>B.Sc in Nutrition & Dietetics </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). </li>
                    <li>Description: Study of diet, food, and human health. </li>
                    <li>Job Scope: Hospitals, clinics, sports centers, fitness industry. </li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>
             <div className="bams">
                <h2>B.Sc in Dairy Technology </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB/PCM (50%). </li>
                    <li>Description: Study of milk production, dairy processing, dairy engineering. </li>
                    <li> Job Scope: Dairy boards, private dairy companies, food research.</li>
                    <li> Average Package: ₹3–6 LPA.</li>
                </ul>
            </div>
            <div className='futr'>
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

export default Allied;
