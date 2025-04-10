import React from 'react';
import INSTRUCarousel from '../../Departments/Instrumentation/INSTRUCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './INSTRU.css'
import InstruFaculty from './InstruFaculty';
import { Link } from 'react-router-dom';
import INSTRUvm from '../../Departments/Instrumentation/INSTRUvm';
import DropDownInstru from './DropDownInstru';
import { useState } from 'react';


const instru = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  
  return (
    
       <div className='instru-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-instru'>
          <h1 className="text-left">INSTRUMENTATION ENGINEERING</h1>
        </Row>

        <Row>

<INSTRUCarousel />

<Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-instru overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-instru">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/cse"
              className={location.pathname === "/cse" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/Entc"
              className={location.pathname === "/Entc" ? "active-link" : ""}
            >
              Electronics & Telecommunication Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru-01">
            <Link
              to="/instru"
              className={location.pathname === "/intru" ? "active-link" : ""}
            >
             <b className="left-nav-row-instru-01" onClick={() => setOpenDropdown(!openDropdown)} >Instrumentation Engineering</b> 
            </Link>

            {
                        openDropdown &&

                        <div className={`instru-dropdown-instru ${openDropdown ? "dropdown-open" : ""}`}>
                          <DropDownInstru />
                        </div>

                      }

          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/Elec"
              className={location.pathname === "/Elec" ? "active-link" : "/Elec"}
            >
              Electrical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/mech"
              className={location.pathname === "/mech" ? "active-link" : "/mech"}
            >
              Mechanical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/Cvl"
              className={location.pathname === "/Cvl" ? "active-link" : ""}
            >
              Civil Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/workshop"
              className={location.pathname === "/workshop" ? "active-link" : "/workshop"}
            >
              Workshop
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  </Col>


</Row>
<Col md={8} className='right-content-instru' >
             
            <div >
              <INSTRUvm className='right-content-instru' />
            </div>

            <div className="facultyDetails">
              <InstruFaculty />
            </div>

            
          </Col>
</Row>
      </Container>
      
    </div>
  )
}

export default instru;
