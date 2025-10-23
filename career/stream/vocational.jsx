import './voca.css';

import { useNavigate } from 'react-router-dom';

const Vocational =()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="vocational">
          <div className="navbarr"> 
             <nav className= "text-black p-4 shadow-md">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">@T</h1>
        <div className="flex gap-6"> 
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/streams" className="hover:text-blue-400">Streams</a>
          </div>
      </div>
    </nav>
        </div>
          <h1 className='hed-7'>Vocational Stream Career Options</h1>

    <div className="voca-strm">
  
  <div className="career-category">
    <h2> Information Technology & Computer Applications</h2>
    <ul>
      <li>Web Developer</li>
      <li>Software Programmer</li>
      <li>App Developer</li>
      <li>Graphic Designer</li>
      <li>Digital Marketer</li>
    </ul>
  </div>

  <div className="career-category">
    <h2> Engineering & Technical Trades</h2>
    <ul>
      <li>Electrician</li>
      <li>Mechanical Technician</li>
      <li>Automobile Mechanic</li>
      <li>Plumber / Carpenter / Welder</li>
      <li>Instrumentation & Industrial Technician</li>
    </ul>
  </div>

  <div className="career-category">
    <h2> Health & Paramedical Careers</h2>
    <ul>
      <li>Lab Technician</li>
      <li>Medical Assistant</li>
      <li>Pharmacy Technician</li>
      <li>Nursing Assistant</li>
      <li>Physiotherapist Assistant</li>
    </ul>
  </div>

  <div className="career-category">
    <h2> Hospitality, Tourism & Event Management</h2>
    <ul>
      <li>Hotel Management</li>
      <li>Travel Consultant</li>
      <li>Event Planner</li>
      <li>Catering / Food Production</li>
    </ul>
  </div>

  <div className="career-category">
    <h2> Creative & Media Fields</h2>
    <ul>
      <li>Photography</li>
      <li>Animation & Multimedia</li>
      <li>Fashion & Textile Design</li>
      <li>Film & Video Editing</li>
    </ul>
  </div>

  <div className="career-category">
    <h2> Agriculture & Allied Trades</h2>
    <ul>
      <li>Agricultural Technician</li>
      <li>Horticulture / Floriculture Specialist</li>
      <li>Dairy / Poultry Assistant</li>
      <li>Food Processing Technician</li>
    </ul>
  </div>

     <button className='btn-2' onClick={() => navigate('/stream/vocational/in-detail')}>
                     Detail!</button>
        </div>
        <div className='footer-1'>
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

export default Vocational;