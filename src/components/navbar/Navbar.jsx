import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import correcto de React Router
import styles from './Navbar.module.css';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" className={styles.navbar}>
            <Container fluid>
                {/* Brand como Link de React Router */}
                <Navbar.Brand as={Link} to="/" className={styles.brand}>
                    <span className={styles.name}>Isabela Munevar</span>
                    <span className={styles.title}>Ph.D. Economics</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar" className={styles.toggler} />
                
                <Navbar.Collapse id="navbar" className={styles.navCollapse}>
                    <Nav className={`ms-auto ${styles.navLinks}`}>
                        {/* Enlaces internos con Link */}
                        <Nav.Link as={Link} to="/research" className={styles.navLink}>
                            Research
                        </Nav.Link>
                        
                        {/* Enlace de contacto interno */}
                        <Nav.Link as={Link} to="/contact" className={styles.navLink}>
                            Contact
                        </Nav.Link>
                        
                        {/* Enlaces externos con target y rel */}
                        <Nav.Link 
                            href="https://drive.google.com/file/d/1-3cDnAZkriPOyRf-UxvzcHNYCrDJY17p/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.navLink}
                        >
                            JMP
                        </Nav.Link>
                        
                        <Nav.Link 
                            href="https://drive.google.com/file/d/1-7FQISgfFtMCkf7RBzzbssxEuIuWUS8B/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.navLink}
                        >
                            CV
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}