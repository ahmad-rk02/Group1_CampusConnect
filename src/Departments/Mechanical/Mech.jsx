import React from 'react';
import MechCarousel from '../../Departments/Mechanical/Mechcarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Mech.css'
import MechFaculty from './MechFaculty';
import { Link } from 'react-router-dom';
import Mechvm from '../../Departments/Mechanical/Mechvm';
import DropDownMech from './DropDownMech';
import { useState } from 'react';


const Mech = () => {
   const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='instru-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">



        <Row className='head-box-Mech'>
          <h1 className="text-left">MECHANICAL ENGINEERING</h1>
        </Row>

        <Row>

          <MechCarousel />

          <Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
            {/* Left Sidebar */}
            <Col md={4} className='left-sidebar-Mech overlay-col ' >
              <div className="left-sidebar-wrapper">
                <Card className="left-nav-Mech">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="left-nav-row-Mech">
                      <Link
                        to="/cse"
                        className={location.pathname === "/cse" ? "active-link" : "/cse"}
                      >
                        Computer Science & Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech">
                      <Link
                        to="/Entc"
                        className={location.pathname === "/Entc" ? "active-link" : ""}
                      >
                        Electronics & Telecommunication Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech">
                      <Link
                        to="/instru"
                        className={location.pathname === "/instru" ? "active-link" : "/instru"}
                      >
                        Instrumentation Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech">
                      <Link
                        to="/Elec"
                        className={location.pathname === "" ? "active-link" : "/Elec"}
                      >
                        Electrical Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech-01">
                      <Link
                        to="/mech"
                        className={location.pathname === "/mech" ? "active-link" : ""}
                      >
                        <b className="left-nav-row-Mech-01" onClick={() => setOpenDropdown(!openDropdown)} >Mechanical Engineering</b>
                      </Link>

                      {
                        openDropdown &&

                        <div className={`mech-dropdown-mech ${openDropdown ? "dropdown-open" : ""}`}>
                          <DropDownMech />
                        </div>

                      }

                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech">
                      <Link
                        to="/Cvl"
                        className={location.pathname === "/Cvl" ? "active-link" : ""}
                      >
                        Civil Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-Mech">
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
          <Col md={8} className='right-content-Mech' >

            <div >
              <Mechvm className='right-content-Mech' />
            </div>       
            <div >
              <MechFaculty className='right-content-Mech' />
            </div>    
          </Col>
        </Row>
      </Container>



    </div>
  )
}

export default Mech;
