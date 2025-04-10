import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Workshop.css'
import WorkshopImage from '../assets/workshop.png';
import TurningShop from '../assets/Machine-Turning_Shop.jpg';
import WeldingShop from '../assets/Welding-shop.jpg'
import FittingShop from '../assets/Fitting-shop.jpg'
import CarpentryShop from '../assets/Carpentry-shop.jpg'
import SmithyShop from '../assets/Smithy-Shop.jpg'


const Workshop = () => {
  const location = useLocation();




  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design-ws text-white">
          <Col className="header-align-ws">
            <h1 className="text-left ">WORKSHOP</h1>
          </Col>
        </Row>

        <Row className="flex-nowrap left-index-ws">





          {/* Left Sidebar */}
          <Col md={3} className="left-sidebar-ws ">
            <Card className="left-nav-ws">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/cse"
                    className={location.pathname === "/cse" ? "active-link" : ""}
                  >
                    Computer Science & Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/Entc"
                    className={location.pathname === "/Entc" ? "active-link" : ""}
                  >
                    Electronics & Telecommunication Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/instru"
                    className={location.pathname === "/instru" ? "active-link" : ""}
                  >
                    Instrumentation Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/Elec"
                    className={location.pathname === "/Elec" ? "active-link" : ""}
                  >
                    Electrical Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/mech"
                    className={location.pathname === "/mech" ? "active-link" : ""}
                  >
                    Mechanical Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws">
                  <Link
                    to="/Cvl"
                    className={location.pathname === "/Cvl" ? "active-link" : ""}
                  >
                    Civil Engineering
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ws-01">
                  <Link
                    to="/workshop"
                    className={location.pathname === "/workshop" ? "active-link" : ""}
                  >
                    Workshop
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            {/* <div className='side-heading-bottom-ws'>
            <div className="fs-4 fw-bold gcoec-text " style={{ color: '#EADBC8'}}>GCOEC</div>
            <h2 className="fw-bold text" style={{ color: '#102C57', lineHeight: '1.5' }}>
                     Delivering Wisdom Engineers</h2>

            </div> */}

          </Col>



          {/* Right Content Section */}
          <Col className="mt-4 content-card-ws">
            {/* About Institute */}
            <Card className="mb-4 w-100 card-content-ws">
              <Card.Body className="bg-white-ws">
                <Row>
                  <Col md={12} className=" p-0 text-center mb-3">
                    <img
                      src={WorkshopImage}
                      alt="workshopimage"
                      className="ws-image"
                    />
                  </Col>
                  <Card.Header className="bg-golden-ws w-100 abt-head">
                    <h4>About Workshop</h4>
                  </Card.Header>

                  <Col md={12}>
                    <p style={{ marginTop: '20px' }}>



                      The Workshp is the backbone of the Institute practical, all maintenance & project related activities are carried out here. Under the visionary leadership of Principal, Dr. S. G. Akojwar and Guidance of Workshop Superintendent, Prof. S. D. Butley, workshop Department has emerged as the powerhouse to enhance the practical and technical skills of budding technocrats.
                      The department is now focusing on practical excellence and technical skill development of the students through integrated efforts.
                    </p>

                    <p style={{ marginTop: '30px' }}>
                      To make the students familiar with various manufacturing practices and processes the institute has well equipped workshops. As the saying goes, â€œLearning by doing is the best method of learning and leaves a lasting impression on the young minds of the studentsâ€. The students of the college get the opportunity to work in Machine Shop, Carpentry Shop, Sheet Metal Shop, Welding Shop, Fitting Shop, Moulding Shop and Smithy Shop to get hands-on training. Sincere and persistent efforts by the staff of workshop wing helps students learn by actually doing the various procedures by their own hands. The exposure to design intricacies, manufacturing processes, fabrication techniques and working of machinery and equipment used in manufacturing helps students adapt to the industrial environment, when they come across similar floor situations in the industry.
                    </p>

                    <Card.Header className="bg-golden-ws w-100 dept-vis" style={{ marginTop: '40px' }}>
                      <h4>Department Vision</h4>
                    </Card.Header>

                    <p style={{ marginTop: '30px' }}>
                      To be Excellence in the Tribal Region of the Country, distinguished for its Locally and Globally Relevant Innovative Academic Programs, with Learner Centric Value based Transformative Educationâ€
                    </p>

                    <Card.Header className="bg-golden-ws w-100 dept-mis" style={{ marginTop: '40px' }}>
                      <h4>Department Mission</h4>
                    </Card.Header>

                    <p style={{ marginTop: '30px' }}>
                      <ul>
                        <li>
                          <strong>M1 :</strong> To provide under safe environment, knowledge and practice of hand tools, power tools, machine tools and measuring instruments to impart skills to design, measure and control size and shape of engineering products.
                        </li>
                        <li>
                          <strong>M2 :</strong> To encourage students to use their practical knowledge, creativity and skills to design and manufacture solutions of social or industrial relevance.
                        </li>
                      </ul>
                    </p>

                    <Card.Header className="bg-golden-ws w-100 infra-ws" style={{ marginTop: '40px' }}>
                      <h4>Infrastructure</h4>
                    </Card.Header>

                    <h4 style={{ color: '#102c57', marginTop: '30px' }}>Brief Description :</h4>

                    <Table style={{ marginTop: '40px' }} className='table-ws'>

                      <tbody className='table-ws'>
                        <tr>
                          <td>Number of shops</td>
                          <td>08</td>
                        </tr>
                        <tr>
                          <td>Departmental Library</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Faculty/Instructor Cabins</td>
                          <td>07</td>
                        </tr>
                        <tr>
                          <td>No. of Computers</td>
                          <td>07</td>
                        </tr>
                        <tr>
                          <td>No. of Laptops</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Boys Common Room</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Girls Common Room</td>
                          <td>01</td>
                        </tr>
                      </tbody>
                    </Table>

                    <Card.Header className="bg-golden-ws w-100 shp-ws" style={{ marginTop: '40px' }}>
                      <h4>Shop Details</h4>
                    </Card.Header>

                    <div className='shop-details-content-01'>

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '30px', borderColor: '#102c57', borderWidth: '2px', borderStyle: 'solid', padding: '7px', width: '300px', borderRadius: '7px' }}><strong>Machine/Turning Shop</strong></h4>

                      <img
                        src={TurningShop}
                        alt="TurningShop"
                        className="ws-imagesss"
                        style={{ width: '850px', height: '350px' }}
                      />

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '20px' }}>Major Equipments :</h4>

                      <ul class="three-columns">
                        <li>
                          Lathe machine
                        </li>
                        <li>
                          Milling machine
                        </li>
                        <li>
                          Radial drilling machine
                        </li>
                        <li>
                          Shaping machine
                        </li>
                        <li>
                          Lathe machine
                        </li>
                        <li>
                          Shaping machine
                        </li>
                        <li>
                          Milling tool dynamometer
                        </li>
                        <li>
                          Milling tool Griding dynamometer
                        </li>
                        <li>
                          Drill Tool dynamometer
                        </li>
                        <li>
                          Lathe tool dynamometer
                        </li>
                        <li>
                          P.S.G Lathe
                        </li>
                        <li>
                          Shaping machine
                        </li>
                        <li>
                          Universal cutter & Tool grinder
                        </li>
                        <li>
                          Central lathe
                        </li>
                        <li>
                          Plasma machine
                        </li>
                        <li>
                          Spark erosion
                        </li>
                        <li>
                          Milling machine
                        </li>
                        <li>
                          All geared central lathe machine
                        </li>
                        <li>
                          Heavy duty shaping machine
                        </li>
                        <li>
                          Milling machine
                        </li>
                      </ul>

                    </div>

                    <div className='shop-details-content-02'>

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '30px', borderColor: '#102c57', borderWidth: '2px', borderStyle: 'solid', padding: '7px', width: '210px', borderRadius: '7px' }}><strong>Welding Shop</strong></h4>

                      <img
                        src={WeldingShop}
                        alt="weldingShop"
                        className="ws-imagesss"
                        style={{ width: '850px', height: '350px' }}
                      />

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '20px' }}>Major Equipments :</h4>

                      <ul class="three-columns">
                        <li>
                        Welding Transformer 150 Amp
                        </li>
                        <li>
                        Welding Transformer Air Cool
                        </li>
                        <li>
                        Bench drilling Machine
                        </li>
                        <li>
                        Heavy Duty Grinder With Stand
                        </li>
                        <li>
                        Welding Transformer Air Cool
                        </li>
                        <li>
                          Shaping machine
                        </li>
                      </ul>

                    </div>

                    <div className='shop-details-content-03'>

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '30px', borderColor: '#102c57', borderWidth: '2px', borderStyle: 'solid', padding: '7px', width: '210px', borderRadius: '7px' }}><strong>Fitting Shop</strong></h4>

                      <img
                        src={FittingShop}
                        alt="FittingShop"
                        className="ws-imagesss"
                        style={{ width: '850px', height: '350px' }}
                      />

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '20px' }}>Major Equipments :</h4>
                      
                      <ul class="three-columns">
                        <li>
                        Drill Machine Portable 1/2"
                        </li>
                        <li>
                        Drill Machine Portable 1/4"
                        </li>
                        <li>
                        Portable bench grinder 1ph
                        </li>
                        <li>
                        Hydraulic hacksaw machine 250mm
                        </li>
                        <li>
                        Vernier height gauge 12"
                        </li>
                        <li>
                        Bench drill Machine
                        </li>
                        <li>
                        Heavy duty grinder
                        </li>
                        <li>
                        Air Compressor 1/2'' HP
                        </li>
                      </ul>

                    </div>

                    <div className='shop-details-content-04'>

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '30px', borderColor: '#102c57', borderWidth: '2px', borderStyle: 'solid', padding: '7px', width: '230px', borderRadius: '7px' }}><strong>Carpentry Shop</strong></h4>

                      <img
                        src={CarpentryShop}
                        alt="CarpentryShop"
                        className="ws-imagesss"
                        style={{ width: '850px', height: '350px' }}
                      />

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '20px' }}>Major Equipments :</h4>

                      <ul class="three-columns">
                        <li>
                        Circular Saw
                        </li>
                        <li>
                        Wood Turning Machine M/C
                        </li>
                        <li>
                        Circular Saw Heavy Duty Machine
                        </li>
                        <li>
                        Bench Drill Machine
                        </li>
                        <li>
                        Wooden Zig Saw Machine
                        </li>
                        <li>
                        Surface Grinder Machine
                        </li>
                      </ul>

                    </div>

                    <div className='shop-details-content-05'>

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '30px', borderColor: '#102c57', borderWidth: '2px', borderStyle: 'solid', padding: '7px', width: '210px', borderRadius: '7px' }}><strong>Smithy Shop</strong></h4>

                      <img
                        src={SmithyShop}
                        alt="SmithyShop"
                        className="ws-imagesss"
                        style={{ width: '850px', height: '350px' }}
                      />

                      <h4 style={{ color: '#102c57', marginTop: '30px', marginBottom: '20px' }}>Major Equipments :</h4>

                      <ul class="three-columns">
                        <li>
                        Hand shaering machine
                        </li>
                        <li>
                        Anvil 100kg
                        </li>
                        <li>
                        Air blower 1hp
                        </li>
                        <li>
                        Heavy duty grinder with stand
                        </li>
                        <li>
                        Anvil 105kg
                        </li>
                        <li>
                        Sewage block heavy duty
                        </li>
                      </ul>

                    </div>

                    <Card.Header className="bg-golden-ws w-100 tnlm-ws" style={{ marginTop: '50px' }}>
                      <h4>Teaching & Learning Material</h4>
                    </Card.Header>

                    <h4 style={{ color: '#102c57', marginTop: '30px' }}>Youtube Video Links for Workshop Practicals :</h4>

                    <Table style={{ marginTop: '40px' }} className='table-ws'>

                      <tbody className='table-ws'>
                        <tr>
                          <td style={{ maxWidth: '430px' }}>Safety and Precautions of Machine Section by Mr. N.D. Barse, Instructor :</td>
                          <td><a href='https://youtu.be/JasFWsJyytY'>Click Here</a></td>
                        </tr>
                        <tr>
                          <td style={{ maxWidth: '430px' }}>Introduction of machine section tools by Mr. N. D. Barse, Instructor :</td>
                          <td><a href='https://youtu.be/mukZMBKbspo'>Click Here</a></td>
                        </tr>
                        <tr>
                          <td style={{ maxWidth: '430px' }}>First Year All Branch Machine section Practical perform such as Step Turning, Taper Turning and drilling by Mr. N. D. Barse, Instructor : </td>
                          <td><a href='https://youtu.be/LEDD7X7oTdI'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Third Year Mechanical (Machine Shop) Spur gear practical perform on lathe and milling Machine by Mr. N. D. Barse, Instructor : </td>
                        <td><a href='https://youtu.be/CaLEniMKzVE'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Third Year Workshop (Machine Shop)practical on Taper turning , shaping and internal threading by Mr. N. D. Barse, Instructor : </td>
                        <td><a href='https://youtu.be/0xLBulK0MMI'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Introduction of Welding Section tools by Mr. Y. R. Bondre, Instructor : </td>
                        <td><a href='https://youtu.be/OID-i_HAGjs'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> First Year All Branch Welding Section practical of BUTT JOINT by Mr. Y. R. Bondre, Instructor : </td>
                        <td><a href='https://youtu.be/WuLtbzg2DXY'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Introduction of Fitter Section tools by Mr. D. T. Wandhare, Instructor : </td>
                        <td><a href='https://youtu.be/mWeokCtabyk'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> First Year All Branch Fitter Section practical perform such as Filling, Sawing, Drilling by Mr. D. T. Wandhare, Instructor : </td>
                        <td><a href='https://youtu.be/lY5kP9tcpSI'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Introduction of Smithy Section tools by Mr. R. D. Bodhalkar, Instructor : </td>
                        <td><a href='https://youtu.be/d2HVXwZAMlw'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> First Year All Branch Smithy Section practical of CHISEL by Mr. R. D. Bodhalkar, Instructor : </td>
                        <td><a href='https://youtu.be/P2xT7tYZ7q4'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> Introduction of sheet metal section tools by Mr. D. T. Wandhare, Instructor : </td>
                        <td><a href='https://youtu.be/tkkBwkyv-hw'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> First Year All Branch Sheet metal practical of Rectangle Trey by Mr. D. T. Wandhare, Instructor : </td>
                        <td><a href='https://youtu.be/jec1k3U85vE'>Click Here</a></td>
                        </tr>
                        <tr>
                        <td style={{ maxWidth: '430px' }}> First Year All Branch Carpentry practical of T Joint by Mr. M. T. Ghose, Instructor : </td>
                        <td><a href='https://youtu.be/ToF2edd5ySo'>Click Here</a></td>
                        </tr>
                      </tbody>
                    </Table>

                    <div>

                      

                    </div>

                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Workshop; // Export the component