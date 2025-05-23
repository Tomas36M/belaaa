import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className={styles.footerContent}>
                    {/* Columna de Información */}
                    <Col md={4} className={`${styles.footerColumn} text-center`}>
                        <div className={styles.brandSection}>
                            <h3 className={styles.name}>Isabela Munevar Escalante</h3>
                            <p className={styles.title}>Ph.D. Economics Researcher</p>
                            <div className={styles.contactInfo}>
                                <AiOutlineMail className={styles.icon} />
                                <a href="mailto:isabela.munevar@gmail.com" className={styles.email}>
                                    isabela.munevar@gmail.com
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Columna de Recursos Académicos */}
                    <Col md={4} className={`${styles.footerColumn} text-center`}>
                        <div className="w-100">
                            <h4 className={styles.sectionTitle}>Academic Resources</h4>
                            <div className={styles.links}>
                                <a href="#" className={styles.link}>Curriculum Vitae</a>
                                <a href="#" className={styles.link}>Job Market Paper</a>
                                <a href="#" className={styles.link}>Research Portfolio</a>
                            </div>
                        </div>
                    </Col>

                    {/* Columna de Redes Sociales */}
                    <Col md={4} className={`${styles.footerColumn} text-center`}>
                        <div className="w-100">
                            <h4 className={styles.sectionTitle}>Connect</h4>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>
                                    <AiOutlineLinkedin className={styles.socialIcon} />
                                    LinkedIn Profile
                                </a>
                                <a href="#" className={styles.socialLink}>
                                    <AiOutlineTwitter className={styles.socialIcon} />
                                    Academic Twitter
                                </a>
                                <a href="mailto:isabela.munevar@gmail.com" className={styles.socialLink}>
                                    <AiOutlineMail className={styles.socialIcon} />
                                    Email Contact
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Copyright */}
                <div className={styles.copyrightSection}>
                    <p>© {new Date().getFullYear()} Isabela Munevar Escalante. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;