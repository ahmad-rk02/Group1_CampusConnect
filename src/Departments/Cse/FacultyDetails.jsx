import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import './FacultyDetails.css';  // Import the CSS file

const FacultyDetails = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty/fetch');
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <Container>
      <h2 className="my-4 faculty-heading">Faculty</h2>
      {faculty.map((member) => (
        <Card key={member._id} className="faculty-card">
          <Card.Img
            variant="top"
            src={member.photo}
            alt={member.name}
            className="faculty-photo"
          />
          <div className="faculty-info">
            <div className="faculty-name">{member.name}</div>
            <div className="faculty-position">{member.position}</div>
            <div className="faculty-bio">{member.bio}</div>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default FacultyDetails;
