import React, { useEffect, useState } from 'react';
import { Card, Button,Row,Col,Container,Jumbotron } from 'react-bootstrap';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './ProjectsHome.css'

import Interior from '../../Assets/InteriorProject.jpg';
const ProjectsHome = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyDxv26dr0PJVqUulJXVoNjvWPxBUtg7NwY",
        authDomain: "anushkaimagine.firebaseapp.com",
        projectId: "anushkaimagine",
        storageBucket: "anushkaimagine.appspot.com",
        messagingSenderId: "463368236524",
        appId: "1:463368236524:web:2dbc6298a7f078f32f24c9",
        measurementId: "G-HF6NT09K3E"
    });

    const fetchProjects = async () => {
      const db = firebase.firestore();
      const projectRef = db.collection('Project');

      try {
        const snapshot = await projectRef.get();
        const projectData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleViewMore = (projectId) => {
    const url = new URL(window.location.href);
    url.searchParams.append('projectId', projectId);
    window.history.pushState(null, null, url.toString());
  };

  return (
    <div >
        <br/>
        <br/>
        <Container>
        <div style = {{ marginTop: '2px' }} >
        <div className = "container text-lg-left header-all" >
        <Row >
        <Col md={6} className = "header-content-all" >
        <br/>
        <div className="head-all">All Projects</div>
        <br/>
        
        <p className = "lead" > Transforming spaces into timeless reflections of elegance and style, <span style = {{ color:'rgb(0, 125, 136)', fontWeight: 'bold' }}> Anushka Imagine </span> creates stunning interiors that captivate the senses  </p>
        
        </Col>

        <Col md={6}  >
        <img src={Interior} className='interiormain'/>
        </Col>

        </Row> 
        </div>
        </div>  


        </Container>
        <br/>
        <br/>

        <Container className='card-cont'>
        <Row>
      {projects.map((project) => (
        <Col md={4}>
        <div key={project.id}>
          <Card className='Card'>
            <Card.Img variant="top" src={project.primaryImg} />
            <Card.Body>
              <Card.Title>{project.projectName}</Card.Title>
              <Card.Text className='card-shortdesc'>{project.shortDesc}</Card.Text>
              <a href={'/projects/'+project.id} ><Button
                variant="primary"
                
              >
                View More
              </Button></a>
            </Card.Body>
          </Card>
        </div>
        </Col>
        
      ))}
      </Row>
      </Container>
    </div>
  );
};

export default ProjectsHome;