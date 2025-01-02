import React from 'react';
import './CommitteesClubsCSE.css';
import acseslogo from '../../assets/AcsesLogo.jpg';
import bitsandbyteslogo from '../../assets/BitsnBytes.jpg';
import CLangBootCamp from '../../assets/CLangBootCamp.jpg';
import NSDCeleb from '../../assets/NSDCeleb.jpg';
import IHAGCOEC from '../../assets/IHAGCOEC.jpg';
import BlindCoding from '../../assets/BlindCoding.jpg';
import TreePlantation from '../../assets/TreePlantation.jpg';

const CommitteesAndClubs = () => {
  return (
    <div className="committees-clubs container">
      
    <div className='heading-box-CmtClb'>
    <h4>Committees and Clubs</h4>
    </div>

    <div className='Acses-cmt'>
      <div className='Acses-cmt-logo-part'>
      <img
          src={acseslogo}
          alt="Acses Committee Logo"
          className="acses-cmt-logo"
        />
      </div>
      <div className='Acses-cmt-right-part'>
         <p className='Acses-text-1'>
         The Association of Computer Science and Engineering Students (ACSES) is a key group in the computer science and engineering department. It consists of dedicated students who organize the department's annual seminars and workshops, promoting both academic and extracurricular activities.
         </p>
         <p className='Acses-text-2'>
         One important task of ACSES is setting criteria for choosing leaders within the committee. The head of ACSES, a crucial role, defines these criteria by evaluating candidates' skills, passion, and dedication to the committee's goals.
         </p>
         <p className='Acses-text-3'>
         The election process, guided by these criteria, looks for students who excel academically and show leadership, organizational skills, and enthusiasm for the department's mission. This ensures that ACSES's leadership team is both capable and motivated to create valuable educational events, enhancing the learning environment for everyone.
         </p>
      </div>
    </div>

    <div className='Bits-and-bytes'>
     <div className='Bits-and-bytes-left'>
       <h4 className='Bits-and-bytes-heading'>
        Bits & Bytes Club
       </h4>
       <p className='Bits-and-bytes-text'>
       Welcome to the Bits and Bytes Club of our CSE department! Our vibrant community is dedicated to enhancing your technical skills through a variety of engaging activities, including C programming bootcamps, placement talks, and much more. Whether you're looking to sharpen your coding abilities or prepare for your future career, our club offers the perfect platform to learn, compete, and grow together.
       </p>
     </div>
     <div className='Bits-and-bytes-right'>
       <div className='Bits-and-bytes-box'>
       <div className='Bits-and-bytes-logo'>
      <img
          src={bitsandbyteslogo}
          alt="Bits and bytes Logo"
          className="Bits-and-bytes-logo"
        />
      </div>
       </div>
     </div>
    </div>


    <div className="cc_container">
                <div className="cc_heading">
                    <h3>Committees and Clubs</h3>
                </div>
                <div className="event_container">
                    <div className="event_box">
                        <div className="img_bg">
                            <img src={CLangBootCamp} alt="box" />
                        </div>
                        <div className="event_info">


                            <ol>
                                <li>   Evaluate the knowledge and skills acquired by participants during the boot camp.</li>
                                <li> Provide a formal assessment required for the certification process.</li>
                                <li> Encourage students to apply their learning to practical problems.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="event_box">
                        <div className="img_bg">
                            <img src={NSDCeleb} alt="box" />
                        </div>
                        <div className="event_info">
                            <ol>
                                <li>Celebrate the importance of science in our daily lives.</li>
                                <li>Encourage students from all departments to engage with scientific concepts.</li>
                                <li>Promote skills such as critical thinking and problem-solving.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="event_box">
                        <div className="img_bg">
                            <img src={IHAGCOEC} alt="box" />
                        </div>
                        <div className="event_info">
                            <ol>
                                <li>Identify and nurture innovative ideas and solutions developed by students.</li>
                                <li>Prepare and select teams for participation in the Smart India Hackathon 2023.</li>
                                <li>Encourage a culture of creativity, teamwork, and practical application of knowledge among students</li>
                            </ol>
                        </div>
                    </div>
                    <div className="event_box">
                        <div className="img_bg">
                            <img src={BlindCoding} alt="box" />
                        </div>
                        <div className="event_info">
                            <ol>
                                <li>Round box: Medium Difficulty Participants were tasked with writing a C program statement of medium complexity with monitors off.  Evaluation criteria included code execution, number of errors, and time taken to complete the task.</li>
                                <li>Round 2: High Difficulty Participants were required to write a C program statement of high complexity with monitors off!</li>
                            </ol>
                        </div>
                    </div>
                    <div className="event_box">
                        <div className="img_bg">
                            <img src={TreePlantation} alt="box" />
                        </div>
                        <div className="event_info">
                            <ol>
                                <li>
                                    Participants eagerly planted indigenous tree saplings and documented their efforts through photographs, which were uploaded to a Google Form for transparency and accountability. The event gained strong community support, strengthening bonds and emphasizing the importance of collective action in addressing environmental challenges.

                                </li>
                                <li>
                                    The Tree Plantation Event organized by the Association of Computer Science Engineering Students of Government College of Engineering Chandrapur exemplified the potential of technology-enabled environmental initiatives. By leveraging digital platforms such as Google Forms, students not only planted saplings but also created a virtual network of environmental advocates united by a common goal.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        

       
    </div>
  );
};

export default CommitteesAndClubs;





   
           