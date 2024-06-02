import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import techBlog from "/assets/Projects/tech-blog.png";


function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={techBlog}
                            isBlog={false}
                            title="Tech Blog"
                            description="I implemented robust authentication and authorization using Spring Security to enhance the signup, login, logout, and forgot password features in the application. Additionally, I designed a dynamic dashboard that enables users to seamlessly perform CRUD operations on their blogs, incorporating a feature-rich text editor for enhanced content creation. Furthermore, I implemented robust server-side validation and global exception handling to improve application reliability and error management."
                            ghLink="https://github.com/Mithilesh85/tech-blog-ui/tree/dev"
                            demoLink="https://www.youtube.com/watch?v=Qnz10mx1cBw&t=1029s"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
