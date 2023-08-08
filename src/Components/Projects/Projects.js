import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Projects.css';
import { Link } from 'react-router-dom';
import esdc from '../../Assets/projects-images/ESD/first.png';
import skynews from '../../Assets/projects-images/sky-news/sky-news.png';

function Projects() {
  return (
    <div>
        <h2 className="mb-2 mt-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          My Completed Projects:
        </h2>
        <Row  className="g-4 mt-4">


        <Col  >
          <Card className='bg-light shadow project-card-hover h-100'style={{maxWidth:"20rem"}}>
            <Card.Img className='fluid' variant="top" src={esdc} style={{width:"100%" ,height:"auto"}}/>
            <Card.Body>
              <Card.Title className='mb-3'>Emergency Information Share in Dhaka City</Card.Title>
              <a className='btn btn-outline-success me-2' href="/"><i class="fa-regular fa-eye"></i> Live</a>
              <Link  to={"/esdc-details"} className='btn btn-outline-success'><i class="fa-solid fa-plus"></i> Details</Link>
            </Card.Body>
          </Card>
        </Col>


        <Col  >
          <Card className='bg-light shadow project-card-hover h-100'style={{maxWidth:"20rem"}}>
            <Card.Img className='fluid' variant="top" src={skynews} style={{width:"100%" ,height:"auto"}}/>
            <small className='fw-bold pt-2'>This is online News Portal</small>
            <Card.Body>
              <Card.Title className='mb-3'>Sky News</Card.Title>
             
              <a className='btn btn-outline-success me-2' href="https://sky-news-bd.netlify.app/" target=' '><i class="fa-regular fa-eye"></i> Live</a>
              <Link  to={"/skynews-details"} className='btn btn-outline-success'><i class="fa-solid fa-plus"></i> Details</Link>
            </Card.Body>
          </Card>
        </Col>


       
      
    </Row>
    </div>
  );
}

export default Projects;