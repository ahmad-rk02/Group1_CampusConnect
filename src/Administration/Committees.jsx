import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Committees.css'

const Committees = () => {

  const [committeeData, setCommitteeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;       //uncomment this before pushing to deployment
  const API_BASE_URL = "http://localhost:1337";                           //comment this before pushing to deployment

  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-committees?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch committee data");
        }
        const result = await response.json();
        setCommitteeData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // const CommitteeTable = [
  //   { id: 1, name: 'Anti ragging Committees', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Anti-Ragging-Committee.pdf', incharge: 'Dr P. Washimkar' },
  //   { id: 2, name: 'Grievance Redressal Committee', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Grievance-Redressal-Committee.pdf', incharge: 'Kranti Bokhre' },
  //   { id: 3, name: 'Internal Complaint committee', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Internal-Complaint-Committee.pdf', incharge: 'Mrs. Bokhare' },
  //   { id: 4, name: 'SC/ST,WOMEN/GIRLS complaint committee', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/SC-ST-Committee.pdf', incharge: 'Amit R Sakhare' },
  //   { id: 5, name: 'Online Grievance Form', text: 'Form', dated: '03/12/2024', circular: '/login', incharge: 'Student Section' },
  //   { id: 6, name: 'IIC Council', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/IIC-Council-Office-Order-2024.pdf', incharge: '--' },
  //   { id: 7, name: 'Internal Quality Assurance Cell', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/IQAC-Office-Order-2024.pdf', incharge: '--' },
  //   { id: 8, name: 'Student Counsellor Cell', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Student-Counsellor-Cell.pdf', incharge: '--' },
  //   { id: 9, name: 'Industry Institute Cell & Entrepreneurship Cell', text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Institution-Industry-cell.pdf', incharge: '--' },
  // ];
 
  return (
    <div>

      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className='head-box-committee-clg'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row className="left-index-committee-clg" >
          {/* Left Sidebar */}
          <Col md={2} xs={12} className='left-sidebar-committee-clg' >
            <Card className="left-nav-committee-clg" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/principalHods"
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/studentSection"
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/office"
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg-01">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Commiittees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/login"
                    className={location.pathname === "/login" ? "active-link" : ""}
                  >
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col md={9} xs={12} className='committee-div'>

            <div className='head-right-top-committee-clg'  >
              <h3 style={{ color: '#102C57', backgroundColor: 'rgb(234,219,200)', padding: '10px' }} >GCOEC Committees</h3></div>


            <div className='committee-clg-table-cont'>
              <Table className='committee-clg-table' striped bordered hover>
                <thead className='table-header-committee-clg'>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of Committees</th>
                    <th>Dated</th>
                    <th>Official Circular/Form</th>
                    <th>Incharge</th>
                  </tr>
                </thead>
                <tbody className="table-body-committee-clg">
                  {committeeData.map((committee, index) => (
                    <tr key={committee.id}>
                      <td>{index + 1}</td>
                      <td className='name-of-committees'>{committee.committee_name}</td>
                      <td>{committee.committee_date}</td>
                      {/* <td className='table-row-committee-clg'>
                        <a href={prog.circular} target="_blank" rel="noopener noreferrer">
                          {prog.text}
                        </a>
                      </td> */}
                      <td className='table-row-committee-clg'>
          {committee.official_circular.length > 0 && (
            <a href={`${API_BASE_URL}${committee.official_circular[0].url}`} target="_blank" rel="noopener noreferrer">
              {/* {committee.official_circular[0].name} */} Circular
            </a>
          )}
        </td>
                      <td>{committee.committee_incharge}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>


          </Col>

        </Row>
      </Container>


 {/* <div>
<h2>Committee List</h2>
<table border="1">
  <thead>
    <tr>
      <th>Committee Name</th>
      <th>Committee Incharge</th>
      <th>Committee Date</th>
      <th>PDF</th>
    </tr>
  </thead>
  <tbody>
    {committeeData.map((committee) => (
      <tr key={committee.id}>
        <td>{committee.committee_name}</td>
        <td>{committee.committee_incharge}</td>
        <td>{committee.committee_date}</td>
        <td>
          {committee.official_circular.length > 0 && (
            <a href={`http://localhost:1337${committee.official_circular[0].url}`} target="_blank" rel="noopener noreferrer">
              {committee.official_circular[0].name}
            </a>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>  */}


    </div>
  )
}

export default Committees





// import React, { useEffect, useState } from "react";

// const CommitteeList = () => {
//   const [committeeData, setCommitteeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCommitteeData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/gec-committees?populate=*");
//         if (!response.ok) {
//           throw new Error("Failed to fetch committee data");
//         }
//         const result = await response.json();
//         setCommitteeData(result.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCommitteeData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Committee List</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Committee Name</th>
//             <th>Committee Incharge</th>
//             <th>Committee Date</th>
//             <th>PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {committeeData.map((committee) => (
//             <tr key={committee.id}>
//               <td>{committee.committee_name}</td>
//               <td>{committee.committee_incharge}</td>
//               <td>{committee.committee_date}</td>
//               <td>
//                 {committee.official_circular.length > 0 && (
//                   <a href={`http://localhost:1337${committee.official_circular[0].url}`} target="_blank" rel="noopener noreferrer">
//                     {committee.official_circular[0].name}
//                   </a>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CommitteeList;
