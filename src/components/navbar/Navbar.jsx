import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" className={styles.navbar}>
            <Container fluid>
                <Navbar.Brand href="/" className={styles.brand}>
                    <span className={styles.name}>Isabela Munevar</span>
                    <span className={styles.title}>Ph.D. Economics</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar" className={styles.toggler} />
                
                <Navbar.Collapse id="navbar" className={styles.navCollapse}>
                    <Nav className={`ms-auto ${styles.navLinks}`}>
                        <Nav.Link href="research" className={styles.navLink}>Research</Nav.Link>
                        <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1-3cDnAZkriPOyRf-UxvzcHNYCrDJY17p/view?usp=sharing" target="_blank" className={styles.navLink}>JMP</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1-7FQISgfFtMCkf7RBzzbssxEuIuWUS8B/view?usp=sharing" target="_blank" className={styles.navLink}>CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}