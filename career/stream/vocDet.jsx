const VocDet =()=>{
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
            <div className="arts-humanities">
  <h1> Career Options in Detail</h1>
  <ul>
    <li>
      <h3>Information Technology & Computer Applications</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + relevant IT course/diploma. <br />
      <strong>Description:</strong> Careers in web development, software programming, app development, and digital marketing. <br />
      <strong>Job Scope:</strong> Web developer, software programmer, app developer, digital marketer, graphic designer. <br />
      <strong>Average Package:</strong> ₹3–10 LPA
    </li>

    <li>
      <h3>Engineering & Technical Trades</h3>
      <strong>Eligibility:</strong> 10+2 (Science/PCM preferred) + ITI/Polytechnic diploma. <br />
      <strong>Description:</strong> Practical technical trades including electrical, mechanical, and industrial skills. <br />
      <strong>Job Scope:</strong> Electrician, mechanical technician, automobile mechanic, plumber, welder, instrumentation technician. <br />
      <strong>Average Package:</strong> ₹2.5–7 LPA
    </li>

    <li>
      <h3>Health & Paramedical Careers</h3>
      <strong>Eligibility:</strong> 10+2 (Science/Biology preferred) + Paramedical diploma/degree. <br />
      <strong>Description:</strong> Supporting healthcare professions including labs, pharmacy, and physiotherapy. <br />
      <strong>Job Scope:</strong> Lab technician, medical assistant, pharmacy technician, nursing assistant, physiotherapy assistant. <br />
      <strong>Average Package:</strong> ₹3–6 LPA
    </li>

    <li>
      <h3>Hospitality, Tourism & Event Management</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + diploma/degree in hospitality or tourism. <br />
      <strong>Description:</strong> Management of hotels, events, travel, and catering services. <br />
      <strong>Job Scope:</strong> Hotel manager, travel consultant, event planner, catering manager. <br />
      <strong>Average Package:</strong> ₹3–8 LPA
    </li>

    <li>
      <h3>Creative & Media Fields</h3>
      <strong>Eligibility:</strong> 10+2 (any stream) + diploma/degree in design, multimedia, or film. <br />
      <strong>Description:</strong> Creative careers in photography, animation, fashion, and media production. <br />
      <strong>Job Scope:</strong> Photographer, animator, fashion designer, video editor, multimedia specialist. <br />
      <strong>Average Package:</strong> ₹3–10 LPA
    </li>

    <li>
      <h3>Agriculture & Allied Trades</h3>
      <strong>Eligibility:</strong> 10+2 (Science/Maths preferred) + Diploma/Degree in Agriculture/Horticulture. <br />
      <strong>Description:</strong> Careers in farming, horticulture, dairy, poultry, and food processing. <br />
      <strong>Job Scope:</strong> Agricultural technician, horticulturist, dairy/poultry assistant, food processing technician. <br />
      <strong>Average Package:</strong> ₹2.5–6 LPA
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

export default VocDet;