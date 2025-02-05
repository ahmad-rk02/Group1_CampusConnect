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
            <div className="heading-box-CmtClb">
                <h4>Committees and Clubs</h4>
            </div>

            {/* ACSES Section */}
            <div className="Acses-cmt">
                
                <div className="Acses-cmt-logo-part">
                    <img
                        src={acseslogo}
                        alt="ACSES Committee Logo"
                        className="acses-cmt-logo"
                    />
                </div>
                <div className="Acses-cmt-right-part">
                    <p className="Acses-text">
                        The Association of Computer Science and Engineering Students (ACSES) is a key group in the computer science and engineering department. It consists of dedicated students who organize the department's annual seminars and workshops, promoting both academic and extracurricular activities.
                    </p>
                    <p className="Acses-text">
                        One important task of ACSES is setting criteria for choosing leaders within the committee. The head of ACSES, a crucial role, defines these criteria by evaluating candidates' skills, passion, and dedication to the committee's goals.
                    </p>
                    <p className="Acses-text">
                        The election process, guided by these criteria, looks for students who excel academically and show leadership, organizational skills, and enthusiasm for the department's mission. This ensures that ACSES's leadership team is both capable and motivated to create valuable educational events, enhancing the learning environment for everyone.
                    </p>
                </div>
            </div>

            {/* Bits and Bytes Section */}
            <div className="Bits-and-bytes">
                <div className="Bits-and-bytes-left">
                    <h4 className="Bits-and-bytes-heading">
                        Bits & Bytes Club
                    </h4>
                    <p className="Bits-and-bytes-text">
                        Welcome to the Bits and Bytes Club of our CSE department! Our vibrant community is dedicated to enhancing your technical skills through a variety of engaging activities, including C programming bootcamps, placement talks, and much more. Whether you're looking to sharpen your coding abilities or prepare for your future career, our club offers the perfect platform to learn, compete, and grow together.
                    </p>
                </div>
                <div className="Bits-and-bytes-right">
                    <div className="Bits-and-bytes-box">
                        <img
                            src={bitsandbyteslogo}
                            alt="Bits and Bytes Logo"
                            className="Bits-and-bytes-logo"
                        />
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div className="cc_container">
                <div className="cc_heading">
                    <h3>Committees and Clubs Events</h3>
                </div>
                <div className="event_container">
                    {[
                        {
                            image: CLangBootCamp,
                            descriptions: [
                                "Evaluate the knowledge and skills acquired by participants during the boot camp.",
                                "Provide a formal assessment required for the certification process.",
                                "Encourage students to apply their learning to practical problems."
                            ]
                        },
                        {
                            image: NSDCeleb,
                            descriptions: [
                                "Celebrate the National Science Day to encourage scientific thinking.",
                                "Conduct quizzes and workshops on cutting-edge technologies.",
                                "Award participants excelling in science-related events."
                            ]
                        },
                        {
                            image: BlindCoding,
                            descriptions: [
                                "Test logical and problem-solving skills without visual cues.",
                                "Encourage innovation and creativity among participants.",
                                "Provide a fun, engaging experience for coders."
                            ]
                        },
                        {
                            image: TreePlantation,
                            descriptions: [
                                "Promote environmental awareness and sustainability.",
                                "Encourage students to plant trees on and off campus.",
                                "Foster a sense of responsibility towards nature."
                            ]
                        }
                    ].map((event, index) => (
                        <div className="event_box" key={index}>
                            <div className="img_bg">
                                <img src={event.image} alt={`Event ${index + 1}`} />
                            </div>
                            <div className="event_info">
                                <ol>
                                    {event.descriptions.map((description, descIndex) => (
                                        <li key={descIndex}>{description}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Single "Know More" Button Below Events */}
                <div className="know_more_container">
                    <button className="know_more_btn">Know More</button>
                </div>
            </div>


        </div>
    );
};

export default CommitteesAndClubs;
