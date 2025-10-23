import { Link } from 'react-router-dom';
import './com.css';

const Commerce = ()=>{
    return (
        <>
        <div className="commerce">
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
        <h1 className='main-hd'>Commerce Stream Career Options</h1>
           
            <div className="comm">
            <Link to="/stream/commerce/CA">
            <h3 className='hed-3'>🔹 Professional Courses (Chartered & Accounting Careers) </h3></Link>
            <ul>
            <li>Chartered Accountant (CA)</li>
            <li>Company Secretary (CS)</li>
            <li>Cost and Management Accountant (CMA)</li>
            <li>B.Com (General / Honours)</li>
            <li>Accounting & Taxation</li>
            <li>Actuarial Science</li>
            <li>Economics (B.A. Economics / M.A. Economics)</li>
            <li>BBA (Bachelor of Business Administration)</li>
            <li>MBA (after graduation)</li>
            <li> Chartered Financial Analyst (CFA)</li>
            <li> Certified Public Accountant (CPA)</li>
            <li> ACCA (Association of Chartered Certified Accountants – UK)</li>
            </ul>
            
        <div className="category">
            <Link to="/stream/commerce/CA">
            <h3 className='hed-3'> 🔹 Undergraduate Degrees (Core Commerce)</h3></Link>
            <ul>
                <li> B.Com (General)</li>
                <li> B.Com (Honours)</li>
                <li>B.Com in Accounting & Finance </li>
                <li> B.Com in Banking & Insurance</li>
                <li> B.Com in Taxation</li>
                <li> B.Com in Economics</li>
                <li> B.Com in Marketing</li>
                <li> B.Com in Computer Applications</li>
                </ul> </div>

  <div className="category">
    <Link to="/stream/commerce/CA">
    <h3 className='hed-3'>🔹Banking & Finance Careers</h3></Link>
    <ul>
      <li>Bank PO/Clerk (via IBPS/SBI Exams)</li>
      <li>Investment Banking</li>
      <li>Financial Analyst</li>
      <li>Stock Market / Trading / Portfolio Management</li>
      <li>Insurance Sector (LIC, IRDA, etc.)</li>
      <li>Wealth Management </li>
         <li>Insurance & Risk Management </li>
          <li>Financial Planner (CFP – Certified Financial Planner)</li>
           
    </ul>
  </div>

  <div className="category">
    <Link to="/stream/commerce/buisness">
    <h3 className='hed-3'>🔹Business & Management</h3></Link>
    <ul>
      <li>Entrepreneurship / Startups</li>
      <li>Marketing & Sales</li>
      <li>Human Resource Management (HR)</li>
      <li>International Business</li>
      <li>Hospitality & Tourism Management</li>
      <li>Supply Chain & Logistics</li>
      <li>BBA (Bachelor of Business Administration) </li>
      <li> BBM (Bachelor of Business Management)</li>
      <li> BMS (Bachelor of Management Studies)</li>
      <li>BHM (Bachelor of Hotel Management) </li>
     <li>BTTM (Bachelor of Travel & Tourism Management) </li>
     <li>BIBF (Bachelor of International Business & Finance) </li>
     <li>MBA / PGDM (after graduation) </li>

    </ul>
  </div>

  <div className="category">
    <Link to="/stream/commerce/buisness">
    <h3 className='hed-3'>🔹Law & Professional Courses</h3></Link>
    <ul>
      <li>5-year Integrated Law Course (B.Com LLB / BA LLB / BBA LLB via CLAT)</li>
      <li>Company Law</li>
      <li>Corporate Law</li>
      <li>Business Law</li>
      <li>Company Law</li>
    </ul>
  </div>

  <div className="category">
    <Link to="/stream/commerce/buisness">
    <h3 className='hed-3'>🔹 Creative & Emerging Fields</h3></Link>
    <ul>
        <li>Advertising & Public Relations </li>
        <li> Event Management</li>
        <li> Fashion Designing</li>
        <li>Interior Designing </li>
        <li> Graphic Designing</li>
        <li>Animation & Multimedia </li>
        <li>Digital Marketing</li>
        <li>Hotel Management</li>
        <li>Mass Communication & Media</li>
    </ul>
  </div>

  <div className="category">
    <Link to="/stream/commerce/buisness">
    <h3 className='hed-3'>🔹 Government & Competitive Exams </h3></Link>
    <ul>
        <li>UPSC / Civil Services</li>
        <li>SSC CGL / CHSL</li>
        <li>RBI Grade B Officer </li>
        <li>NABARD Officer </li>
        <li>LIC AAO / ADO </li>
        <li> Railways (RRB)</li>
        <li>State PCS Exams </li>
        <li>Defence Exams (CDS, AFCAT, etc.) </li>
        <li>Indian Economic Services (IES) </li>
        
    </ul>
  </div>
   
   <div className="category">
    <Link to="/stream/commerce/buisness">
    <h3 className='hed-3'>🔹 Teaching & Academic Careers </h3> </Link>
    <ul>
        <li> Teaching (after B.Ed + M.Com/PhD for higher studies)</li>
        <li>School Lecturer (PGT Commerce) </li>
        <li>Assistant Professor (via UGC-NET) </li>
        
    </ul>
   </div>
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

export default Commerce ;