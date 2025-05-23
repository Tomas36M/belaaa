import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from './TeachingExperience.module.css';
import uniandesLogo from '../../assets/logos/uniandes-logo.png';
import columbiaLogo from '../../assets/logos/columbia-logo.png';

const TeachingExperience = () => {
    const experiences = [
        {
            university: "Los Andes University",
            location: "Bogotá, Colombia",
            logo: uniandesLogo,
            positions: [
                {
                    period: "Jan 2015 – June 2017",
                    role: "Teacher Assistant to Professor Guillermo Perry",
                    course: "Introduction to Colombian Economy",
                    level: "Undergraduate level"
                },
                {
                    period: "Aug 2014 – Dec 2015",
                    role: "Teacher Assistant to Professor David Bardey",
                    course: "Introduction to Microeconomics",
                    level: "Undergraduate level"
                }
            ]
        },
        {
            university: "Columbia University",
            location: "New York, United States",
            logo: columbiaLogo,
            positions: [
                {
                    period: "Aug 2019 – Dec 2019",
                    role: "Teacher Assistant to Professor Judith Scott-Clayton",
                    course: "Economics and Education",
                    level: "Master's level"
                }
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <Container fluid>
                <Row className="g-4">
                    {experiences.map((exp, index) => (
                        <Col md={6} key={index}>
                            <Card className={styles.experienceCard}>
                                <Card.Body>
                                    <div className={styles.cardHeader}>
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.university} logo`}
                                            className={styles.universityLogo}
                                        />
                                        <div className={styles.universityInfo}>
                                            <h3 className={styles.university}>{exp.university}</h3>
                                            <p className={styles.location}>{exp.location}</p>
                                        </div>
                                    </div>

                                    <div className={styles.positions}>
                                        {exp.positions.map((position, idx) => (
                                            <div key={idx} className={styles.position}>
                                                <div className={styles.timelineDot}></div>
                                                <div className={styles.positionContent}>
                                                    <p className={styles.period}>{position.period}</p>
                                                    <h4 className={styles.role}>{position.role}</h4>
                                                    <p className={styles.course}>{position.course}</p>
                                                    <p className={styles.level}>{position.level}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TeachingExperience;