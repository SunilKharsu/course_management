
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function Home() {
    useEffect(() =>{
        document.title = "Home";
    }, []);
    return (
        <div>
            <Container className="mt-2 p-5 bg-light rounded text-center">
                <Row>
                    <Col>
                        <h1>Effortless Course Management</h1>
                        <p>
                        This application is built to enhance the learning experience. The backend is powered by Spring Boot, while the frontend is developed using React.js, ensuring a seamless and dynamic user experience.
                        </p>
                    </Col>
                </Row>
                <Button color="primary" outline>Start Using</Button>
            </Container>
        </div>
    );
}

export default Home;

