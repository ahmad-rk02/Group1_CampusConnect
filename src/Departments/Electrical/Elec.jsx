import React from 'react';
import ElecCarousel from '../../Departments/Electrical/ElecCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Elec.css'

import { Link } from 'react-router-dom';
import Elecvm from '../../Departments/Electrical/Elecvm';
import ElectFaculty from './ElectFaculty';
import DropDownElect from './DropDownElect';
import { useState } from 'react';


const Elec = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    
       <div className='Elec-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-Elec'>
          <h1 className="text-left">ELECTRICAL ENGINEERING</h1>
        </Row>

        <Row>

<ElecCarousel />

<Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-Elec overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-Elec">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-Elec">
            <Link
              to="/cse"
              className={location.pathname === "/cse" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec">
            <Link
              to="/Entc"
              className={location.pathname === "/Entc" ? "active-link" : ""}
            >
              Electronics & Telecommunication Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec">
            <Link
              to="/instru"
              className={location.pathname === "/intru" ? "active-link" : "/instru"}
            >
             Instrumentation Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec-01">
            <Link
              to="/Elec"
              className={location.pathname === "/Elec" ? "active-link" : ""}
            >
              <b className="left-nav-row-Elec-01" onClick={() => setOpenDropdown(!openDropdown)} >Electrical Engineering</b>
            </Link>

            {
                        openDropdown &&

                        <div className={`elect-dropdown-elect ${openDropdown ? "dropdown-open" : ""}`}>
                          <DropDownElect />
                        </div>

                      }

          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec">
            <Link
              to="/mech"
              className={location.pathname === "/mech" ? "active-link" : "/mech"}
            >
              Mechanical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec">
            <Link
              to="/Cvl"
              className={location.pathname === "/Cvl" ? "active-link" : ""}
            >
              Civil Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Elec">
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
<Col md={8} className='right-content-Elec' >
             
            <div >
              <Elecvm className='right-content-Elec' />
            </div>

            <div className="facultyDetails">
              <ElectFaculty />
            </div>
            
          </Col>
</Row>
      </Container>
      
    </div>
  )
}

export default Elec;
