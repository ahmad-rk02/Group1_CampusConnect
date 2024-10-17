import CSECarousel from '../../Departments/Cse/CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSE.css'
import CSEvm from '../../Departments/Cse/CSEvm';
import CodeUnnati from './CodeUnnati';
import CommitteesClubsCSE from './CommitteesClubsCSE';
// import Footer from './pages/Footer.jsx'


const CSE = () => {
  return (
    <div className='cse-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

        <Row className='head-box-cse'>
            <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

          <CSECarousel />

          <Row className="g-0 overlay-row w-100" >
            {/* Left Sidebar */}
            <Col md={4} className='left-sidebar-cse overlay-col ' >
              <Card className="left-nav-cse">
                <ListGroup variant="flush">
                  <ListGroup.Item className="left-nav-row-cse-01">
                    <Link
                      to="/cse"
                      className={location.pathname === "/cse" ? "active-link" : ""}
                    >
                      <b>Computer Science & Engineering</b>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to=""
                      className={location.pathname === "" ? "active-link" : ""}
                    >
                      Electronics & Telecommunication Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to=""
                      className={location.pathname === "" ? "active-link" : ""}
                    >
                      Instrumentation Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to=""
                      className={location.pathname === "" ? "active-link" : ""}
                    >
                      Electrical Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to=""
                      className={location.pathname === "" ? "active-link" : ""}
                    >
                      Mechanical Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to=""
                      className={location.pathname === "" ? "active-link" : ""}
                    >
                      Civil Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/workshop"
                      className={location.pathname === "" ? "active-link" : "/workshop"}
                    >
                      Workshop
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>


          </Row>
          <Col md={8} className='right-content-cse' >
                   {/* render components here in this Col tag - vinni and vaishnavi */}
                   <div >
                   <CSEvm className='  right-content-cse'/>
                   </div>

                   <div >
                   <CodeUnnati className='  right-content-cse'/>
                   </div>

                   <div >
                   <CommitteesClubsCSE className='  right-content-cse'/>
                   </div>
                  
            </Col>

        </Row>

      </Container>
      
    </div>


  )
}

export default CSE