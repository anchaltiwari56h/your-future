import React from 'react';
import Stream from "./stream.jsx";
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Link } from 'react-router-dom';

const Home = ()=>{
    const navigate = useNavigate();

    return(
     <>
     <div className="home-page flex flex-col min-h-screen ">
        <div className="navbar"> 
       <nav className= "text-white p-4 shadow-md">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">@T</h1>
        <div className="flex gap-6"> 
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/stream" className="hover:text-blue-400">Streams</a>
          <a href="/about" className="hover:text-blue-400">About</a>
       </div>
      </div>
    </nav>
        </div>
       
        <div className="hero">
            <div className="part-a box animate-shadowMove shadow-md ">
                <header>
                 <h1 className='h1 font-bold bg-gradient-to-r from-blue-400 via-pink-400 to to-blue-400 bg-clip-text text-transparent'>  What should I choose ?</h1>
                 <h2 className='h2'> Where should I begin ?</h2>
                 <h3 className='h3'> <i> Confused Today, Clear Tomorrow.</i><br />Choose your CAREER wisely!</h3>
            
                </header>
                </div>
            <div className="part-b">
              <p> Are you looking for right Career Path ?
               <br /> Lets dive into it-
                 </p> 
                
            </div>
            <div className='button'>
               <button  className="btn transition-all duration-150 ease-in-out"onClick={() => navigate('/stream')}>
                     Explore!</button>
            </div>
             </div>

          <h1 className='popular'>Popular Courses With Higher Packages!</h1>
          <div className='contain'> 
         <div className="relative max-w-sm p-0.5 overflow-hidden rounded-xl animate-border-spin boxx">
        <div className="relative p-6 rounded-xl">
        <div className="flex flex-col ">
        <p className=" head items-center text-center text-white-800 dark:text-slate-100">Artificial Intelligence & Machine Learning</p>
        <p className=" cont mt-2 text-slate-600 dark:text-slate-100">
          Companies in tech, finance, healthcare, robotics etc. are automating more, needing smart systems.
          It’s a fast-evolving field — staying current gives you a big premium.
          Typical salaries in India (fresh/mid level): ~ ₹12-30 LPA or more
        </p>
        </div>
        </div>
        </div>
      
        <div className="relative max-w-sm p-0.5 overflow-hidden rounded-xl animate-border-spin boxx">
        <div className="relative p-6 bg-background-light dark:bg-background-dark rounded-xl">
        <div className="flex flex-col">
        <p className=" head items-center text-center text-white-800 dark:text-slate-100">Data Science & Analytics</p>
        <p className=" cont mt-3 text-slate-600 dark:text-slate-100">
          All businesses want to make data-driven decisions. Whoever can turn data into insights is very valuable.
          Roles are diverse: data analyst → data scientist → senior analyst → leadership can follow.
          Typical salaries: ~ ₹10-25 LPA for good ones.
        </p>
        </div>
        </div>
        </div>
         <div className="relative max-w-sm p-0.5 overflow-hidden rounded-xl animate-border-spin boxx">
        <div className="relative p-6 bg-background-light dark:bg-background-dark rounded-xl">
        <div className="flex flex-col ">
        <p className="head items-center text-center text-white-800 dark:text-slate-100">Cloud Computing / DevOps / Infrastructure Engineering</p>
        <p className="cont mt-3 text-slate-600 dark:text-slate-100">
          As companies shift workloads to cloud / hybrid, managing that infrastructure efficiently is crucial.
          Monitoring, security, scaling systems, reliability/availability
          Typical salaries: Many roles start at ₹8-20 LPA; higher for architects / specialists.
        </p>
        </div>
        </div>
        </div>
         <div className="relative max-w-sm p-0.5 overflow-hidden rounded-xl animate-border-spin boxx">
        <div className="relative p-6 bg-background-light dark:bg-background-dark rounded-xl">
        <div className="flex flex-col ">
        <p className="head items-center text-center  text-white-800 dark:text-slate-100">Cybersecurity & Ethical Hacking</p>
        <p className="cont mt-3 text-slate-600 dark:text-slate-100">
          With digitalization, more attacks, more risk. Companies, governments are willing to pay to protect themselves.
          Demand is rising globally, so skills are transferable and valued.
       Typical salaries: Starting somewhat lower sometimes, but experienced roles can go very high. Freshers might get ~ ₹6-12 LPA; skilled/experienced, much more
         </p>
        </div>
        </div>
        </div>
          </div>
     

     
     <div className='footer'>
        <footer className= " text-gray-200 p-6 mt-10">
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

export default Home;