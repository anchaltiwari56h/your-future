import { useNavigate } from 'react-router-dom';
import './art.css';

const Arts =()=>{

   const navigate = useNavigate();
    return(
        <>
        <div className="arts">
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
          <h1 className='hed-5'>Humanities / Arts Stream Career Options</h1>

            <div className="arts-stream">
  
  <div className="career-category">
    <h2>1. Civil Services & Government Careers</h2>
    <ul>
      <li>UPSC Civil Services (IAS, IPS, IFS, IRS, etc.)</li>
      <li>State PSC Exams</li>
      <li>SSC, Railways, Defence Exams</li>
      <li>Indian Foreign Services</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>2. Law & Legal Careers</h2>
    <ul>
      <li>LLB → Lawyer/Advocate</li>
      <li>Corporate Lawyer</li>
      <li>Judge / Judiciary Exams</li>
      <li>Legal Advisor / Consultant</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>3. Media, Journalism & Communication</h2>
    <ul>
      <li>Journalist / Reporter</li>
      <li>Mass Communication (Advertising / PR)</li>
      <li>Film Making & Direction</li>
      <li>Content Writing / Blogging</li>
      <li>Digital Media & Social Media Manager</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>4. Design, Fine Arts & Creative Careers</h2>
    <ul>
      <li>Fashion Designing</li>
      <li>Interior Designing</li>
      <li>Graphic Designing</li>
      <li>Fine Arts / Painting</li>
      <li>Performing Arts (Music, Dance, Theatre)</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>5. Education & Teaching Careers</h2>
    <ul>
      <li>School Teacher (Arts Subjects)</li>
      <li>College Lecturer / Professor</li>
      <li>Researcher / Scholar</li>
      <li>Coaching & Private Tutor</li>
      <li>Educational Content Developer</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>6. Psychology, Counselling & Social Work</h2>
    <ul>
      <li>Psychologist</li>
      <li>Counsellor (Career, Clinical, Educational)</li>
      <li>Social Worker / NGO Professional</li>
      <li>Human Resource Management</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>7. Hospitality & Tourism</h2>
    <ul>
      <li>Hotel Management</li>
      <li>Travel & Tourism Management</li>
      <li>Event Management</li>
      <li>Air Hostess / Flight Steward</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>8. Entrepreneurship & Business</h2>
    <ul>
      <li>Startup Founder</li>
      <li>Small Business Owner</li>
      <li>Freelancer</li>
      <li>Creative Entrepreneur (Art, Design, Content)</li>
    </ul>
  </div>

  <div className="career-category">
    <h2>9. Other Professional Careers</h2>
    <ul>
      <li>Foreign Languages & Translation</li>
      <li>Archaeology / History Research</li>
      <li>Geography / Environmental Studies</li>
      <li>Public Administration</li>
      <li>Library Science</li>
    </ul>
  </div>

       <button className='btn-1' onClick={() => navigate('/stream/arts/detail')}>
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
export default Arts ;