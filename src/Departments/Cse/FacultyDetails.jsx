import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "./FacultyDetails.css";

const FacultyList = () => {
  const [hod, setHod] = useState(null);
  const [faculty, setFaculty] = useState([]);
  const [nonTeaching, setNonTeaching] = useState([]);
  const [visitingFaculty, setVisitingFaculty] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch HOD data
        const hodDoc = await getDoc(doc(db, "cse", "hod"));
        if (hodDoc.exists()) {
          setHod(hodDoc.data());
        }

        // Fetch Faculty data
        const facultyDoc = await getDoc(doc(db, "cse", "faculty"));
        if (facultyDoc.exists()) {
          setFaculty(facultyDoc.data().members || []);
        }

        // Fetch Non-Teaching Faculty data
        const nonTeachingDoc = await getDoc(doc(db, "cse", "non_teaching"));
        if (nonTeachingDoc.exists()) {
          setNonTeaching(nonTeachingDoc.data().members || []);
        }

        // Fetch Visiting Faculty data
        const visitingFacultyDoc = await getDoc(doc(db, "cse", "visiting_faculty"));
        if (visitingFacultyDoc.exists()) {
          setVisitingFaculty(visitingFacultyDoc.data().members || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="faculty-cont-wrapper">
      {/* HOD Section */}
      {hod && (
        <div className="faculty-container">
          <h3 className="faculty-heading">Head of Department</h3>
          <div className="faculty-card">
            <img src={hod.photoUrl} alt={hod.name} className="faculty-photo" />
            <div className="faculty-info">
              <h2>{hod.name}</h2>
              <h3>{hod.designation}</h3>
              <h3>{hod.qualification}</h3>
              <h3>{hod.experience}</h3>
              <a href={`mailto:${hod.email}`} className="faculty-email">
                {hod.email}
              </a>
              <p className={`faculty-bio ${expanded["hod"] ? "expanded" : ""}`}>
                {hod.details}
              </p>
              <button className="read-more-btn" onClick={() => toggleReadMore("hod")}>
                {expanded["hod"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Section */}
      <div className="faculty-container">
        <h3 className="faculty-heading">Faculty</h3>
        {faculty.map((member, index) => (
          <div key={index} className="faculty-card">
            <img src={member.photoUrl} alt={member.name} className="faculty-photo" />
            <div className="faculty-info">
              <h2>{member.name}</h2>
              <h3>{member.designation}</h3>
              <h3>{member.qualification}</h3>
              <h3>{member.experience}</h3>
              <a href={`mailto:${member.email}`} className="faculty-email">
                {member.email}
              </a>
              <p className={`faculty-bio ${expanded[index] ? "expanded" : ""}`}>
                {member.details}
              </p>
              <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Non-Teaching Faculty Section */}
      <div className="faculty-container">
        <h3 className="faculty-heading">Non-Teaching Faculty</h3>
        {nonTeaching.map((staff, index) => (
          <div key={index} className="faculty-card">
            <img src={staff.photoUrl} alt={staff.name} className="faculty-photo" />
            <div className="faculty-info">
              <h2>{staff.name}</h2>
              <h3>{staff.designation}</h3>
              <h3>{staff.qualification}</h3>
              <h3>{staff.experience}</h3>
              <a href={`mailto:${staff.email}`} className="faculty-email">
                {staff.email}
              </a>
              <p className={`faculty-bio ${expanded[`nt${index}`] ? "expanded" : ""}`}>
                {staff.details}
              </p>
              <button className="read-more-btn" onClick={() => toggleReadMore(`nt${index}`)}>
                {expanded[`nt${index}`] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visiting Faculty Section (Displayed in Table Format) */}
      <div className="faculty-container">
        <h3 className="faculty-heading">Visiting Faculty</h3>
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {visitingFaculty.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.name}</td>
                <td>{faculty.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyList;
