import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './sci.css';

const Science = () => {
    const navigate = useNavigate();
  const courses = {
    tech: [
      { name: 'B.Tech / BE' },
      { name: 'B.Sc (Computer Science / IT)' },
      { name: 'BCA' },
      { name: 'Diploma in Engineering' },
      { name: 'Data Science / AI / ML courses' },
    ],
    com: [
      { name: 'BBA/BBM' },
      { name: 'Integrated BBA + MBA' },
      { name: 'Economics (B.A/B.Sc)' },
    ],
    prof: [
      { name: 'Chartered Accountant (CA)' },
      { name: 'Company Secretary (CS)' },
      { name: 'Actuarial Science' },
      { name: 'Investment Banking / Financial Analyst courses' },
    ],
    res: [
      { name: 'B.Sc (Mathematics / Statistics / Physics / Chemistry)' },
      { name: 'B.Sc (Astronomy / Astrophysics)' },
      { name: 'B.Sc (Data Science / Statistics)' },
      { name: 'Research internships / STEM programs' },
    ],
    exams: [
      { name: 'JEE Main + Advanced → Engineering' },
      { name: 'KVPY → Science and research scholarships' },
      { name: 'Olympiads → Maths Olympiad, Physics Olympiad' },
      { name: 'NTSE → General scholarship' },
    ],
    defence: [
      { name: 'Indian Air Force / NDA' },
      { name: 'Indian Navy / CDS' },
      { name: 'Indian Navy Technical Entry' },
      { name: 'B.Tech in Defence Technology/ Aeronautical Engineering' },
      { name: 'DRDO Cadet / Internship programs' },
      { name: 'Indian Coast Guard – Navik/Technical Entry' },
    ],
    bank: [
      { name: 'IBPS Clerk / PO / Specialist Officer (SO)' },
      { name: 'SBI Clerk / PO' },
      { name: 'RBI Grade B / Assistant' },
    ],
    civil: [
      { name: 'UPSC Civil Services (IAS, IPS, IFS)' },
      { name: 'SSC CGL / CHSL / Stenographer' },
      { name: 'State PSC Exams' },
    ],
    rail: [
      { name: 'RRB JE (Junior Engineer)' },
      { name: 'RRB NTPC / Group D' },
      { name: 'DRDO / ISRO Technical Job' },
    ]
  };

  return (
    <div className="science">
       <div className="navba"> 
       <nav className= "text-white p-4 shadow-md">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">@T</h1>
        <div className="flex gap-6"> 
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/streams" className="hover:text-blue-400">Streams</a>
           </div>
      </div>
    </nav>
        </div>
      <h1 className='main-hed'>
        SCIENCE With Maths 
         </h1>
          
      <div className="techn">
        <Link to="/stream/science/tech"> 
        <h3 className='hed-2'>  Engineering & Technology</h3> </Link>
        <ul>
          {courses.tech.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>

      <div className="Comm">
        <h3 className='hed-2'>Commerce / Management</h3>
        <ul>
          {courses.com.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="prof">
        <h3 className='hed-2'>Professional / Finance</h3>
        <ul>
          {courses.prof.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="reserch">
        <Link to="/stream/science/tech"> 
        <h3 className='hed-2'>Science / Research</h3> </Link>
        <ul>
          {courses.res.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="xams">
        <h3 className='hed-2'>Competitive Exams / Scholarships</h3>
        <ul>
          {courses.exams.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="defence">
        <Link to="/stream/science/defence">
        <h3 className='hed-2'>Defence & Armed Forces</h3></Link>
        <ul>
          {courses.defence.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="b">
        <Link to="/stream/science/exam"> 
        <h3 className='hed-2'>Banking & Finance</h3></Link>
        <ul>
          {courses.bank.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="civil">
        <Link to="/stream/science/exam"> 
        <h3 className='hed-2'>Civil Services / Government Jobs</h3></Link>
        <ul>
          {courses.civil.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>

      <div className="rail">
        <Link to="/stream/science/exam"> 
        <h3 className='hed-2'>Railways / Technical Jobs</h3></Link>
        <ul>
          {courses.rail.map((course, i) => (
            <li key={i}>{course.name}</li>
          ))}
        </ul>
      </div>
      
   
      <div>
        <h1 className='main-hed'> SCIENCE with Biology </h1>
      

  {/* Medical & Healthcare */}
  <div >
    <Link to="/stream/science/medical"> 
    <h3 className='hed-2'>Medical & Healthcare</h3> </Link>
    <ul>
      <li>MBBS (Doctor – Allopathic Medicine)</li>
      <li>BDS (Dentistry)</li>
      <li>BAMS (Ayurveda)</li>
      <li>BHMS (Homeopathy)</li>
      <li>BUMS (Unani Medicine)</li>
      <li>BNYS (Naturopathy & Yogic Sciences)</li>
      <li>BPT (Physiotherapy)</li>
      <li>Nursing (B.Sc Nursing, GNM, ANM)</li>
      <li>B.Optom (Optometry)</li>
      <li>Bachelor of Occupational Therapy</li>
      <li>Paramedical Courses (Lab Technician, Radiology, Anesthesia, etc.)</li>
      <li>Pharmacy (B.Pharm, D.Pharm)</li>
      <li>Veterinary Science (B.V.Sc & AH)</li>
    </ul>
  </div>

  {/* Allied & Life Sciences */}
  <div>
    <Link to="/stream/science/allied"> 
    <h3 className='hed-2'>Allied & Life Sciences</h3> </Link>
    <ul>
      <li>B.Sc in Biotechnology</li>
      <li>B.Sc in Microbiology</li>
      <li>B.Sc in Genetics</li>
      <li>B.Sc in Biochemistry</li>
      <li>B.Sc in Forensic Science</li>
      <li>B.Sc in Environmental Science</li>
      <li>B.Sc in Zoology / Botany</li>
      <li>B.Sc in Agriculture / Horticulture / Forestry</li>
      <li>B.Sc in Food Technology</li>
      <li>B.Sc in Nutrition & Dietetics</li>
      <li>B.Sc in Dairy Technology</li>
    </ul>
  </div>

  {/* Research & Advanced Studies */}
  <div>
    <Link to="/stream/science/research">  
    <h3 className='hed-2'>Research & Advanced Studies</h3></Link>
    <ul>
      <li>Integrated M.Sc (Biological Sciences)</li>
      <li>Clinical Research</li>
      <li>Biomedical Science</li>
      <li>Neuroscience</li>
      <li>Bioinformatics</li>
      <li>Marine Biology</li>
    </ul>
  </div>

  {/* Other Professional Paths */}
  <div>
    <Link to="/stream/science/research">
    <h3 className='hed-2'>Other Professional Paths</h3>  </Link>
    <ul>
      <li>Teaching (after B.Ed / higher studies)</li>
      <li>UPSC, SSC, Banking, Govt Exams</li>
      <li>Management (MBA in Healthcare, Hospital Management, etc.)</li>
    </ul>
  </div>
  </div>


      </div>
           <div className='footer'>
        <footer className= " text-gray-200 p-6 mt-20">
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
  );
};

export default Science;
