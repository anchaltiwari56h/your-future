import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './stream.css';
const Stream = ()=>{

    const navigate = useNavigate();

    return(
        <>
        <div className="stream-page ">
            
            <div className="navb"> 
           <nav className= "text-black p-4 shadow-md">
          <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">@T</h1>
        <div className="flex gap-6"> 
          <a href="/stream/science" className="hover:text-blue">Science</a>
          <a href="/stream/commerce" className="hover:text-blue">Commerce</a>
          <a href="/stream/arts" className="hover:text-blue">Arts</a>
          <a href="/stream/vocational" className="hover:text-blue">Vocational</a>
       </div>
      </div>
    </nav>
        </div>
            <div className="S-head">
              <div className='contnt'>
                <h1 className='hed'>Select your Stream, </h1> 
                <h1 className='h-2'>And explore Your career with Jobs opportunities,
                    <br /> Packages and Future growth.. </h1> 
             </div>
               
            <div className="Stream-select" >
            <Link to="/stream/science"> 
            <div className='paragraph'> 
              <u><p className='para'> Science Stream</p> </u>
              <i><p className='para-2'> The Science stream is one of the most popular academic choices after class 10. It mainly focuses on the study of the natural world, 
              technology, and logical reasoning. Students who choose this stream get opportunities in professional fields like engineering, medicine, 
              research, technology, and applied sciences.</p>   
              </i></div> </Link>

            <Link to="/stream/commerce"> 
            <div className='paragraph'>
             <u> <p className='para'> Commerce Stream </p> </u> 
             <i><p className='para-2'>  Commerce   stream deals with the study of business, trade, finance, and economics. 
                It is best suited for students who are interested in business strategies, financial management,
                 entrepreneurship, and analytical thinking. Commerce opens a
                 wide range of career opportunities in the corporate world, banking, management, and entrepreneurship. </p>
               </i> </div></Link> 

              
              <Link to="/stream/arts">
              <div className='paragraph'>
             <u> <p className='para'> Arts / Humanities Stream</p>  </u>
             <i> <p className='para-2'> The Arts/Humanities stream focuses on the study of society, culture, history,
               philosophy, and human behavior. It is ideal for students who are interested in creative fields,
                social sciences, communication, or public services. This stream encourages
               critical thinking, creativity, and analysis of human life and society.</p>
            
              </i> </div> </Link>

            <Link to="/stream/vocational">
            <div className='paragraph'> 
           <u> <p className='para'>Vocational / Skill-Based Stream</p>
            </u> 
            <i><p className='para-2'>The Vocational stream focuses on skill-based education that prepares students for specific trades, technical jobs,
               and career-oriented fields. Unlike purely academic streams, vocational courses emphasize practical training, 
              industry knowledge, and hands-on skills, making students job-ready right after school or higher studies. </p>
             </i></div> </Link>

            </div>  
        </div>
         <div className='foter'>
        <footer className= " text-black p-6 mt-10">
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

export default Stream;