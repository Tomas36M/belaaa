import { Accordion, Container } from 'react-bootstrap';
import { papers } from './papers.js';
import styles from './Research.module.css';

const Research = () => {
    const renderSection = (title, items) => (
        <div className={styles.sectionWrapper}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.titleLine}></div>
            </div>

            <Accordion flush className={styles.accordionContainer}>
                {items.map((paper, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index} className={styles.accordionItem}>
                        <Accordion.Header className={styles.accordionHeader}>
                            <div className={styles.paperHeader}>
                                <span className={styles.yearBadge}>{paper.year}</span>
                                <div>
                                    <h3 className={styles.paperTitle}>{paper.title}</h3>
                                    <div className={styles.authors}>{paper.authors.join(', ')}</div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <div className={styles.description}>{paper.description}</div>
                            {paper.link && (
                                <a href={paper.link} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                                    View Full Publication
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </a>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );

    return (
        <section className={styles.researchSection}>
            <Container fluid>
                {/* Work in Progress */}
                {renderSection('Work in Progress', papers.workInProgress)}

                {/* Peer Reviewed */}
                {renderSection('Peer Reviewed Publications', papers.publications.peerReviewed)}

                {/* Policy Briefs */}
                {renderSection('Policy Briefs', papers.publications.policyBriefs)}

                {/* Book Chapters */}
                {renderSection('Book Chapters', papers.publications.bookChapters)}
            </Container>
        </section>
    );
};

export default Research;