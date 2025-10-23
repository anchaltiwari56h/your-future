
const Detail =()=>{
   

    return (
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
            <div className="arts-humanities">
  <h1>Career Options In Detail</h1>
  <ul>
    <li>
      <h3>Civil Services & Government Careers</h3>
      <strong>Eligibility:</strong> Graduation in any stream + UPSC/PSC/SSC exams. <br />
      <strong>Description:</strong> Entry into administrative services, policymaking, law enforcement, and governance roles. <br />
      <strong>Job Scope:</strong> IAS, IPS, IRS, State PSC officer, Railway officer, Defence officer. <br />
      <strong>Average Package:</strong> ₹8–20 LPA + perks
    </li>

    <li>
      <h3>Law & Legal Careers</h3>
      <strong>Eligibility:</strong> 10+2 (for LLB) / LLB for higher courses. <br />
      <strong>Description:</strong> Practice or consultancy in civil, criminal, corporate, or international law. <br />
      <strong>Job Scope:</strong> Lawyer, advocate, corporate lawyer, judge, legal advisor. <br />
      <strong>Average Package:</strong> ₹4–15 LPA
    </li>

    <li>
      <h3>Media, Journalism & Communication</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + Mass Comm/Journalism degree preferred. <br />
      <strong>Description:</strong> Media, reporting, digital content, advertising, PR, and broadcasting. <br />
      <strong>Job Scope:</strong> Journalist, anchor, content writer, PR manager, digital media specialist. <br />
      <strong>Average Package:</strong> ₹3–10 LPA
    </li>

    <li>
      <h3>Design, Fine Arts & Creative Careers</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + Design/Fine Arts degree/diploma. <br />
      <strong>Description:</strong> Careers in fashion, interior, graphic, performing arts, and painting. <br />
      <strong>Job Scope:</strong> Designer, artist, choreographer, musician, performer. <br />
      <strong>Average Package:</strong> ₹3–12 LPA
    </li>

    <li>
      <h3>Education & Teaching Careers</h3>
      <strong>Eligibility:</strong> Graduation + B.Ed / Postgraduation + NET/PhD. <br />
      <strong>Description:</strong> Teaching, research, academic consultancy, and educational content creation. <br />
      <strong>Job Scope:</strong> Teacher, professor, researcher, tutor, content developer. <br />
      <strong>Average Package:</strong> ₹3–12 LPA
    </li>

    <li>
      <h3>Psychology, Counselling & Social Work</h3>
      <strong>Eligibility:</strong> Graduation/Postgraduation in Psychology/Social Work. <br />
      <strong>Description:</strong> Mental health support, career/educational counselling, and social welfare services. <br />
      <strong>Job Scope:</strong> Psychologist, counsellor, social worker, HR professional. <br />
      <strong>Average Package:</strong> ₹3–10 LPA
    </li>

    <li>
      <h3>Hospitality & Tourism</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + Degree/Diploma in Hospitality or Tourism. <br />
      <strong>Description:</strong> Managing hotels, travel services, and events. <br />
      <strong>Job Scope:</strong> Hotel manager, travel consultant, event manager, air hostess/steward. <br />
      <strong>Average Package:</strong> ₹3–8 LPA
    </li>

    <li>
      <h3>Entrepreneurship & Business</h3>
      <strong>Eligibility:</strong> Graduation in any stream (business/commerce preferred). <br />
      <strong>Description:</strong> Starting and managing your own business or creative venture. <br />
      <strong>Job Scope:</strong> Entrepreneur, startup founder, freelancer, small business owner. <br />
      <strong>Average Package:</strong> ₹3 LPA to Crores (depending on business success)
    </li>

    <li>
      <h3>Other Professional Careers</h3>
      <strong>Eligibility:</strong> 10+2 or Graduation (depending on course). <br />
      <strong>Description:</strong> Specialized careers in foreign languages, archaeology, geography, public administration, library science. <br />
      <strong>Job Scope:</strong> Translator, archaeologist, geographer, librarian, policy analyst. <br />
      <strong>Average Package:</strong> ₹3–10 LPA
    </li>
  </ul>
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
export default Detail;