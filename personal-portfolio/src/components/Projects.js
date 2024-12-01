import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spring_java.jpg";
import projImg2 from "../assets/img/blog.png";
import projImg3 from "../assets/img/lager_ms.png";
import projImg4 from "../assets/img/code_for_all.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




const openProject = (url) => {
  window.open(url, '_blank'); 
}


export const Projects = () => {

  const projects = [
    {
      
      title: "non-profit-org",
      description: "Backend-Domane",
      imgUrl: projImg1,
      projectUrl:"https://github.com/A-Aljwaed/supporting-sp",
      
      
    },
    
    {
      title: "Personal-blog",
      description: "Development & implementatin",
      imgUrl: projImg2,
      projectUrl: "https://blog.aljwaed.de",
    },
    {

      title: "warehouse management",
      description: "Development and Domane Designe",
      imgUrl: projImg3,
      projectUrl: "https://github.com/A-Aljwaed/Lagermanager/tree/main/Siehle",
    },
<p></p>,
    {
      title: "Coding for All",
      description: "Development and hosting",
      imgUrl: projImg4,
      projectUrl:"https://code4all.aljwaed.de"
    }
    

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Programming is not just about writing code; it’s about solving problems and creating possibilities.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Backend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Insperation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">App Developmdent</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                               
                                />
                            )
                          })
                           }
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
  
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>place holder for apps</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    
  )
}
