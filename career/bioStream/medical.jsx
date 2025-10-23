import './medical.css';

const Medical = ()=>{
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
             <h1 className='bio'> 🌿 Biology Stream → Medical & Healthcare</h1>
            
            <div className="bams">
                <h2>MBBS (Doctor – Allopathic Medicine) </h2>
                <ul>
                    <li>Description: The most popular course 
                        for biology students; trains students to become doctors practicing modern medicine. </li>
                    <li>Job Scope: Hospitals, private clinics, government services, research, higher specialization (MD/MS). </li>
                    <li>Package: ₹6–12 LPA (entry), can grow up to ₹20–30 LPA+ with specialization and experience. </li>
                    <li> Eligibility: 10+2 with Physics, Chemistry, Biology (minimum 50% for General, 40% for SC/ST/OBC) + NEET exam.</li>
                    
                </ul>

            </div>
            <div className="bams">
                <h2>BDS (Dentistry) </h2>
                <ul>
                    <li>Description: Focuses on oral healthcare and dentistry. </li>
                    <li>Job Scope: Dentists in clinics/hospitals, teaching, dental research, cosmetic dentistry. </li>
                    <li> Package: ₹4–8 LPA (entry), up to ₹15–20 LPA with own clinic.</li>
                    <li>Eligibility: 10+2 with PCB (minimum 50%) + NEET exam. </li>
                </ul>

            </div>
            <div className="bams">
                <h2> BAMS (Ayurveda)</h2>
                <ul>
                    <li>Description: Study of Ayurvedic medicine system. </li>
                    <li>Job Scope: Ayurvedic practitioner, research, Ayurveda pharma industry. </li>
                    <li> Package: ₹3–6 LPA (entry), can rise with private practice.</li>
               <li>Eligibility: 10+2 with PCB (50%) + NEET exam. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>BHMS (Homeopathy) </h2>
                <ul>
                    <li> Description: Focuses on homeopathic treatment.</li>
                    <li>Job Scope: Homeopathic doctor, teaching, research. </li>
                    <li>Package: ₹3–6 LPA initially. </li>
                <li>Eligibility: 10+2 with PCB (50%) + NEET exam (in most states). </li>
                </ul>
            </div>
            <div className="bams">
                <h2>BUMS (Unani Medicine) </h2>
                <ul>
                    <li>Description: Traditional Unani system of medicine. </li>
                    <li> Job Scope: Homeopathy doctor, teaching, research.</li>
                    <li>Average Package: ₹3–6 LPA. </li>
                    <li>Eligibility: 10+2 with PCB (50%) + NEET exam (in most states). </li>
                </ul>
            </div>
            <div className="bams">
                <h2>BUMS (Unani Medicine) </h2>
                <ul>
                    <li> Eligibility: 10+2 with PCB (50%) + NEET exam.</li>
                    <li> Description: Unani system of medicine.</li>
                    <li>Job Scope: Unani doctor, govt health services, teaching. </li>
                    <li>Average Package: ₹3–5 LPA.</li>
                </ul>
            </div>
            <div className="bams">
                <h2> BNYS (Naturopathy & Yogic Sciences)</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (45–50%). NEET not mandatory. </li>
                    <li>Description: Naturopathy, yoga therapy, wellness. </li>
                    <li> Job Scope: Yoga therapist, naturopathy doctor, wellness centers.</li>
                    <li>Average Package: ₹3–6 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2>BPT (Physiotherapy) </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). NEET not mandatory (some states have CET). </li>
                    <li>Description: Rehabilitation & physical therapy. </li>
                    <li> Job Scope: Hospitals, sports, rehab centers.</li>
                    <li>Average Package: ₹4–7 LPA. </li>
                </ul>
            </div>
            <div className="bams">
                <h2> Nursing (B.Sc Nursing, GNM, ANM) </h2>
                <ul>
                    <li>Eligibility: </li>
                    <ul className='sub-ul'> 
                        <li>B.Sc Nursing → 10+2 with PCB (45–50%) </li>
                         <li> GNM → 10+2 (any stream, preferably PCB)</li>
                          <li> ANM → 10th or 12th pass (varies by state)</li>
                    </ul>
                    <li>Description: Trains nurses for hospitals/clinics. </li>
                    <li> Job Scope: Hospitals, global demand for nurses.</li>
                    <li> Average Package: ₹3–6 LPA (higher abroad).</li>
                </ul>
            </div>
             <div className="bams">
                <h2> B.Optom (Optometry)</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). </li>
                    <li> Description: Study of vision care and eye health.</li>
                    <li> Job Scope: Optometrists, hospitals, optical brands.</li>
                    <li>Average Package: ₹3–5 LPA. </li>
                </ul>
            </div>
                <div className="bams">
                <h2>Bachelor of Occupational Therapy </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%). </li>
                    <li> Description: Rehabilitation for disabled/accident patients.</li>
                    <li>Job Scope: Rehab centers, hospitals, NGOs. </li>
                    <li>Average Package: ₹3–6 LPA.</li>
                </ul>
            </div>
                <div className="bams">
                <h2>Paramedical Courses </h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (45–50%). </li>
                    <li>Description: Lab Technician, Radiology, Anesthesia, etc. </li>
                    <li> Job Scope: Hospitals, diagnostic labs.</li>
                    <li> Average Package: ₹2–5 LPA.</li>
                </ul>
            </div>
                <div className="bams">
                <h2>Pharmacy (B.Pharm, D.Pharm) </h2>
                <ul>
                    <li>Eligibility: </li>
                    <ul className='sub-ul'>
                        <li>B.Pharm → 10+2 with PCB/PCM (50%) </li>
                        <li>D.Pharm → 10+2 with PCB/PCM (45–50%)</li>
                    </ul>
                    <li>Description: Medicines, drug manufacturing, pharmacy business. </li>
                    <li>Job Scope: Pharmacist, pharma companies, drug inspector. </li>
                    <li>Average Package: ₹3–6 LPA (entry), ₹8–12 LPA with experience. </li>
                </ul>
            </div>
                <div className="bams">
                <h2> Veterinary Science (B.V.Sc & AH)</h2>
                <ul>
                    <li>Eligibility: 10+2 with PCB (50%) + NEET exam (required in most states). </li>
                    <li> Description: Animal medicine & surgery.</li>
                    <li> Job Scope: Veterinary doctor, govt animal hospitals, research.</li>
                    <li>Average Package: ₹4–7 LPA. </li>
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

export default Medical;