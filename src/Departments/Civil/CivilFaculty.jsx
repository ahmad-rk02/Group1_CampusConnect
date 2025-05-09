import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CivilFaculty.css";

const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

const FacultyList = () => {
  const [hod, setHod] = useState(null);
  const [faculties, setFaculties] = useState([]);
  const [nonTeachingFaculties, setNonTeachingFaculties] = useState([]);
  const [visitingFaculties, setVisitingFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/civil-hod?populate=*`),
          axios.get(`${API_BASE_URL}/api/civil-faculties?populate=*`),
          axios.get(`${API_BASE_URL}/api/civil-non-teaching-faculties?populate=*`),
          axios.get(`${API_BASE_URL}/api/civil-visiting-faculties?populate=*`),
        ]);

        setHod(res1.data.data);
        setFaculties(res2.data.data);
        setNonTeachingFaculties(res3.data.data);
        setVisitingFaculties(res4.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const getImageUrl = (photo) => {
    if (photo?.url) {
      return photo.url.startsWith("http") ? photo.url : `${API_BASE_URL}${photo.url}`;
    }
    return "placeholder.jpg";
  };

  const downloadAttachment = (attachment) => {
    if (attachment?.url) {
      const url = attachment.url.startsWith("http")
        ? attachment.url
        : `${API_BASE_URL}${attachment.url}`;
      window.open(url, "_blank");
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="faculty-container-civil" id="faculty-civil">
      {/* HOD Section */}
      <h3 className="faculty-heading">Head of Department</h3>
      {hod ? (
        <div className="faculty-card">
          <img src={getImageUrl(hod.photo)} alt={hod.name} className="faculty-photo" />
          <div className="faculty-info">
            <h2>{hod.name || "N/A"}</h2>
            <h3>{hod.designation || "N/A"}</h3>
            <h3>{hod.qualification || "N/A"}</h3>
            <h3>{hod.experience || "N/A"} years</h3>
            <a href={`mailto:${hod.email}`} className="faculty-email">{hod.email || "N/A"}</a>
            {hod.attachment && (
              <div style={{ display: 'block', marginTop: '0.5rem' }}>
                <button
                  onClick={() => downloadAttachment(hod.attachment)}
                  className="attachment-btn"
                >
                  Download CV/Resume
                </button>
              </div>
            )}
            <h3 className="read-more-text">
              {expanded[hod.id] || !hod.details || hod.details.length <= 100
                ? hod.details
                : `${hod.details.substring(0, 100)}...`}
            </h3>
            {hod.details && hod.details.length > 100 && (
              <button onClick={() => toggleExpand(hod.id)} className="read-more-btn">
                {expanded[hod.id] ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No HOD data found.</p>
      )}

      {/* Faculty Members */}
      <h3 className="faculty-heading">Faculty Members</h3>
      {faculties.map((member) => (
        <div key={member.id} className="faculty-card">
          <img src={getImageUrl(member.photo)} alt={member.name} className="faculty-photo" />
          <div className="faculty-info">
            <h2>{member.name}</h2>
            <h3>{member.designation}</h3>
            <h3>{member.qualification}</h3>
            <h3>{member.experience} years</h3>
            <a href={`mailto:${member.email}`} className="faculty-email">{member.email}</a>
            {member.attachment && (
              <div style={{ display: 'block', marginTop: '0.5rem' }}>
                <button
                  onClick={() => downloadAttachment(member.attachment)}
                  className="attachment-btn"
                >
                  Download CV/Resume
                </button>
              </div>
            )}
            <h3 className="read-more-text">
              {expanded[member.id] || !member.details || member.details.length <= 100
                ? member.details
                : `${member.details.substring(0, 100)}...`}
            </h3>
            {member.details && member.details.length > 100 && (
              <button onClick={() => toggleExpand(member.id)} className="read-more-btn">
                {expanded[member.id] ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Non-Teaching Faculty */}
      <h3 className="faculty-heading">Non-Teaching Faculty</h3>
      {nonTeachingFaculties.map((member) => (
        <div key={member.id} className="faculty-card">
          <img src={getImageUrl(member.photo?.[0] || member.photo)} alt={member.name} className="faculty-photo" />
          <div className="faculty-info">
            <h2>{member.name}</h2>
            <h3>{member.designation}</h3>
            <h3>{member.qualification}</h3>
            <h3>{member.experience} years</h3>
            <a href={`mailto:${member.email}`} className="faculty-email">{member.email}</a>
            {member.attachment && (
              <div style={{ display: 'block', marginTop: '0.5rem' }}>
                <button
                  onClick={() => downloadAttachment(member.attachment)}
                  className="attachment-btn"
                >
                  Download CV/Resume
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Visiting Faculty */}
      <h3 className="faculty-heading">Visiting Faculty</h3>
      {visitingFaculties.length > 0 ? (
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Attachment</th>
            </tr>
          </thead>
          <tbody>
            {visitingFaculties.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.name}</td>
                <td>{faculty.designation}</td>
                <td>
                  {faculty.attachment ? (
                    <button
                      onClick={() => downloadAttachment(faculty.attachment)}
                      className="table-attachment-btn"
                    >
                      Download
                    </button>
                  ) : (
                    <span className="no-attachment">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No visiting faculty members found.</p>
      )}
    </div>
  );
};

export default FacultyList;
